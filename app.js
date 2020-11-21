require("dotenv").config({ path: "./.env" });

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const routes = require("./api/routes");
const { handleErrors } = require("./middlewares/handleErrors");
const { importCsv } = require("./import.js");
const cors = require("cors");

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

var uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.mycln.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = async () => {
  try {
    console.log("Trying to connect database...");
    await mongoose.connect(uri, options);
    console.log("Database connected");
    importCsv();
  } catch (e) {
    console.log("Connection error, retrying in 5 sec...");
    setTimeout(connect, 5000);
  }
};

connect();

app.get("/ping", (req, res) => {
  return res.send({
    msg: "API WORKING!",
  });
});

http.listen(process.env.PORT, () => {
  console.log(`NodeJs listening on port ${process.env.PORT}`);
});

app.use((err, req, res, next) => {
  handleErrors(err, req, res, next);
});
