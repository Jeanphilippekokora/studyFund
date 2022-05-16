const mongoose = require("mongoose");
const schema = mongoose.Schema;
const demandeSchema = new schema({
  montant: {
    type: number,
    required: [true, "vous devez saisir un montant"],
  },
  date: {
    type: Date,
    required: true,
  },
  id_demandeur: {
    type: schema.Types.ObjectId,
    ref: "Utilisateur",
  },
  objet_du_pret: {
    type: String,
    required: [true, "Veuillez donner un objet à votre demande "],
  },
  diplome_envue: {
    type: String,
    required: [true, "Saisir le diplôme en vue  "],
  },
  lettre_motivation: {
    type: String,
    required: [true, "Ecrivez la lettre de motivation!!"],
  },
  etat_demande: {
    type: Boolean,
    default: false,
  },
});
const demande = mongoose.model("Demande", demandeSchema);
module.exports = demande;
