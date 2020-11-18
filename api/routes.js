const express = require("express");
const app = express();

app.use(require("./bills/bill.router"));

module.exports = app;