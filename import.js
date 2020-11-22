const csvtojson = require("csvtojson");
const moment = require("moment");
const Bill = require("./models/bill");

const importCsv = async () => {
  console.log("Importing data...");

  files = [
    "data/consumo-2018-12.csv",
    "data/consumo-2019-01.csv",
    "data/consumo-2019-02.csv",
  ];

  files.forEach(async (file) => {
    const csvData = await csvtojson().fromFile(file);
    csvData.forEach(async (data) => {
      try {
        const bill = new Bill({
          date: moment(data["Fecha"], "YYYY-MM-DD"),
          hour: parseInt(data["Hora"]),
          consumption: parseFloat(data["Consumo (Wh)"]),
          price: parseFloat(data["Precio (€/kWh)"]),
          cost: parseFloat(data["Coste por hora (€)"]),
        });
        await bill.save();
      } catch (error) {
        console.log("Error importing data: ", error);
      }
    });
  });

};

module.exports = { importCsv };
