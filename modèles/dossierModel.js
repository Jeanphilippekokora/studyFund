const mongoose = require("mongoose");
const dossierSchema = new mongoose.Schema({
  id_demande: {
    type: schema.Types.ObjectId,
    ref: "Demande",
  },
  id_universite: {
    type: schema.Types.ObjectId,
    ref: "Universite",
  },
  photo: {
    type: String,
    required: [true, "Ajoutez votre photo  "],
  },
  reçuPaiement: {
    type: String,
    required: [true, "Ajoutez votre reçu de paiement  "],
  },
  Piece_identité: {
    type: String,
    required: [true, "Ajoutez votre pièce d'identité "],
  },
  Diplôme_bac: {
    type: String,
    required: [true, "Ajoutez votre diplôme du bac "],
  },
  Extrait_naissance: {
    type: String,
    required: [true, "Ajoutez votre extrait de naissance "],
  },
  passport: {
    type: String,
    required: [true, "Ajoutez votre passport "],
  },
});
const dossier = mongoose.model("Dossier", dossierSchema);
module.exports = dossier;
