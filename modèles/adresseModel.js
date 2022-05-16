const mongoose = require("mongoose");
const adresseSchema = new mongoose.Schema({
  pays: {
    type: String,
    required: [true, "précisez le pays"],
  },
  ville: {
    type: String,
    required: [true, "précisez la ville "],
  },
  adresse_complete: {
    type: String,
  },
});
const adresse = mongoose.model("Adresse", adresseSchema);
module.exports = adresse;
