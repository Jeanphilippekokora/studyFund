const mongoose = require("mongoose");
const schema = moogoose.Schema;
const universiteSchema = new schema({
  nom: {
    type: String,
    required: [true, "Un utilisateur doit avoir un nom "],
    trim: true,
  },
  id_adresse: {
    type: schema.Types.Schema,
    ref: "Adresse",
  },
  listeFormation: {
    type: [String],
    required: [true, "Saississez les différentes formations"],
  },
  Description: {
    type: String,
  },
});
const universite = mongoose.model("Universite", universiteSchema);
module.exports = universite;
