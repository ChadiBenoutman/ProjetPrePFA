/* maryem */
const express = require("express");
const router = express.Router();
const Shop = require("../Models/Shop");

// 🔹 POST – Ajouter plusieurs magasins d'un coup
router.post("/", async (req, res) => {
  try {
    const shops = req.body; // On reçoit un tableau JSON comme celui qu'on a préparé
    if (!Array.isArray(shops)) {
      return res.status(400).json({ message: "Données invalides : doit être un tableau" });
    }

    const insertedShops = await Shop.insertMany(shops);
    res.status(201).json({
      message: `${insertedShops.length} magasins ajoutés avec succès !`,
      data: insertedShops
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur lors de l'ajout des magasins", error: err.message });
  }
});

// 🔹 GET – Récupérer tous les magasins
router.get("/", async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
});

module.exports = router;
