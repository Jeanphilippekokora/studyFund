const mongoose = require("mongoose");
const schema = mongoose.Schema;
const etudiantSchema = new schema({
  id_etudiant: {
    type: schema.Types.ObjectId,
    ref: "Utilisateur",
  },
  Diplome: {
    type: String,
    required: [true, "vous devez ajouter votre diplome "],
  },
  baccalaureat: {
    type: String,
    required: [true, "vous devez saisir  "],
  },
});
const etudiant = mongoose.model("Etudiant", etudiantSchema);
module.exports = etudiant;
