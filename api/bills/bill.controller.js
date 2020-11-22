const boom = require("@hapi/boom");
const billService = require("./bill.service");
const _ = require("underscore");

const createBill = async (req, res, next) => {
  try {
    const body = req.body;
    const bill = await billService.createBill(body);
    res.json({ ok: true, data: bill });
  } catch (error) {
    return next(boom.badData(error.message));
  }
};

const getBills = async (req, res, next) => {
  try {
    const bills = await billService.getBills();
    res.json({ ok: true, data: bills });
  } catch (error) {
    return next(boom.badData(error.message));
  }
};

const getBill = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bill = await billService.getBill(id);
    if (!bill) {
      return next(boom.badData("Bill not found"));
    }
    res.json({ ok: true, data: bill });
  } catch (error) {
    return next(boom.badData(error.message));
  }
};

const editBill = async (req, res, next) => {
  const id = req.params.id;
  const body = _.pick(req.body, [
    "date",
    "hour",
    "consumption",
    "price",
    "cost",
  ]);

  try {
    const bill = await billService.editBill(id, body);
    if (!bill) {
      return next(boom.badData("Bill not found"));
    }
    res.json({ ok: true, data: bill });
  } catch (error) {
    return next(boom.badData(error.message));
  }
};

const deleteBill = async (req, res, next) => {
  const id = req.params.id;

  try {
    const bill = await billService.deleteBill(id);
    if (!bill) {
      return next(boom.badData("Bill not found"));
    }
    res.json({ ok: true, data: bill });
  } catch (error) {
    return next(boom.badData(error.message));
  }
};

module.exports = {
  createBill,
  getBills,
  getBill,
  editBill,
  deleteBill,
};
