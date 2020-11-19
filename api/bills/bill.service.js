const Bill = require("../../models/bill");

const createBill = async (billData) => {
  const bill = new Bill({
    date: billData.date,
    hour: billData.hour,
    consumption: billData.consumption,
    price: billData.price,
    cost: billData.cost,
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
