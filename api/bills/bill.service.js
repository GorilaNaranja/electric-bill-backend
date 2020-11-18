const Bill = require("../../models/bill");

const createBill = async (billData) => {
  console.log(billData);
  const bill = new Bill({
    Fecha: billData.Fecha,
    Hora: billData.Hora,
    Consumo: billData.Consumo,
    Precio: billData.Precio,
    Coste: billData.Coste,
  });
  const billDB = await bill.save();
  return billDB;
};

const getBills = async () => {
  const bills = await Bill.find().exec();
  return bills;
};

const getBill = async (id) => {
  const bill = await Bill.findById(id).exec();
  return bill;
};

const editBill = async (id, billData) => {
  console.log('Edit Bill Service', id);

  const bill = await Bill.findByIdAndUpdate(id, billData, {
    new: true,
    runValidators: true,
  });
  return bill;
};

const deleteBill = async (id) => {
  const bill = await Bill.findByIdAndRemove(id);
  return bill;
};

module.exports = {
  createBill,
  getBills,
  getBill,
  editBill,
  deleteBill
};
