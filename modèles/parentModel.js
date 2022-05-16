const mongoose = require("mongoose");
const schema = mongoose.Schema;
const parentSchema = new schema({
  id_etudiant: {
    type: schema.Types.ObjectId,
    ref: "Etudiant",
  },
  id_parent: {
    type: schema.Types.ObjectId,
    ref: "Utilisateur",
  },
});
const parent = mongoose.model("Parent", etudiantSchema);
module.exports = parent;
