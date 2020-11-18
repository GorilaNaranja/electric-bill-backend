const express = require("express");
const billController = require("./bill.controller");
const app = express();

app.post("/bill", billController.createBill);
app.get("/bill", billController.getBills);
app.get("/bill/:id", billController.getBill);
app.put("/bill/:id", billController.editBill);
app.delete("/bill/:id", billController.deleteBill);

module.exports = app;
