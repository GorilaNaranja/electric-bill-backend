const csvtojson = require("csvtojson");
const moment = require("moment");
const Bill = require("./models/bill");

const importCsv = async () => {
  console.log("Importing data...");
  const csvData1 = await csvtojson().fromFile("data/consumo-2018-12.csv");
//   const csvData2 = await csvtojson().fromFile("data/consumo-2019-01.csv");
//   const csvData3 = await csvtojson().fromFile("data/consumo-2019-02.csv");

  csvData1.forEach(async (data) => {
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
  console.log("Import completed");
};

module.exports = { importCsv };
