const mongoose = require("mongoose");
const utilisateurSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, "Un utilisateur doit avoir un nom "],
    trim: true,
  },
  prenom: {
    type: String,
    required: [true, "Un utilisateur doit avoir un prénom "],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Un utilisateur doit avoir un email "],
  },
  pays: {
    type: String,
    required: [true, "Vous devez précisez votre pays d'appartenance "],
  },
  telephone: {
    type: Number,
  },
  Whatsapp: {
    type: Number,
  },
});
const utilisateur = mongoose.model("Utilisateur", utilisateurSchema);
module.exports = utilisateur;
