/*maryem */
const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  nom: String,
  note: Number,
  tag: String,
  adresse: String,
  image: String,
  categorie: String
});

module.exports = mongoose.model("Shop", shopSchema);
