/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable node/no-unpublished-require */
/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
const http = require("http");
const url = require("url");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
// // const app = require('./app');
//const user = require("./modèles/UtilisateurModel");
const et = require("./modèles/etudiantModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection sucessful!!"));

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
// const tesu = new user({
//   nom: "icic",
//   email: "camamy0@gmail.com",
//   pays: "guinée",
//   telephone: 45785112,
//   Whatsapp: 548622,
// });
// tesu
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const t = new et({
  Diplome: "cvvv",
  baccalaureat: "bio",
});
t.save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });
const server = http.createServer((req, res) => {
  res.end("hello from the server");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
