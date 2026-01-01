const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://driss:driss123@driss.otqicoq.mongodb.net/doorstep?retryWrites=true&w=majority';
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Modèle User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, enum: ['client', 'prestataire'], required: true },
  phone: String,
  city: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'approved' }, // Pour prestataires, pending par défaut
  isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

// Middleware pour vérifier le token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, 'secretkey');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Route d'inscription
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, type, phone, city } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash du mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Pour prestataires, status = pending
    const status = type === 'prestataire' ? 'pending' : 'approved';

    const user = new User({
      name,
      email,
      password: hashedPassword,
      type,
      phone,
      city,
      status
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully', status });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route de connexion
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    // Vérifier le mot de passe
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid email or password' });

    // Vérifier si le compte est approuvé
    if (user.status !== 'approved') {
      return res.status(403).json({ message: 'Account not approved yet' });
    }

    // Créer et retourner le token
    const token = jwt.sign({ _id: user._id, type: user.type, isAdmin: user.isAdmin }, 'secretkey');
    res.json({ token, user: { name: user.name, email: user.email, type: user.type } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour les admins : approuver/rejeter prestataires
app.put('/api/users/:id/status', verifyToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) return res.status(403).json({ message: 'Access denied' });

    const { status } = req.body; // 'approved' or 'rejected'
    const user = await User.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'Status updated', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour lister les prestataires en attente (pour admins)
app.get('/api/pending-prestataires', verifyToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) return res.status(403).json({ message: 'Access denied' });

    const prestataires = await User.find({ type: 'prestataire', status: 'pending' });
    res.json(prestataires);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour vérifier le statut de l'utilisateur connecté
app.get('/api/check-status', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ status: user.status, type: user.type, isAdmin: user.isAdmin });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route pour créer un admin (temporaire)
app.post('/api/create-admin', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const admin = new User({
      name,
      email,
      password: hashedPassword,
      type: 'client',
      isAdmin: true,
      status: 'approved'
    });
    await admin.save();
    res.status(201).json({ message: 'Admin created' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route temporaire pour lister tous les utilisateurs (à supprimer en prod)
app.get('/api/users', verifyToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) return res.status(403).json({ message: 'Access denied' });
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
