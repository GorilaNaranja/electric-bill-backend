const boom = require("@hapi/boom");
const billService = require("./bill.service");
// const queryOptions = require("../../utils/queryOptions");
// const userFilters = require("./user.filters");

const createBill = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await billService.createBill(body);
    res.json({ ok: true, user });
  } catch (error) {
    return next(boom.badData(error.message));
  }
};

const getBills = async (req, res, next) => {
  try {
    const bills = await billService.getBills();
    res.json({ ok: true, bills });
  } catch (error) {
    return next(boom.badData(error.message));
  }
};

// const getUser = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const user = await userService.getUser(id);
//     if (!user) {
//       return next(boom.badData("User not found"));
//     }
//     res.json({ ok: true, user });
//   } catch (error) {
//     return next(boom.badData(error.message));
//   }
// };

// const editUser = async (req, res, next) => {
//   const id = req.params.id;
//   const body = _.pick(req.body, ["name", "email", "role", "language"]);

//   try {
//     const user = await userService.editUser(id, body);
//     if (!user) {
//       return next(boom.badData("User not found"));
//     }
//     res.json({ ok: true, user });
//   } catch (error) {
//     return next(boom.badData(error.message));
//   }
// };

// const deleteUser = async (req, res, next) => {
//   const id = req.params.id;

//   try {
//     const user = await userService.deleteUser(id);
//     if (!user) {
//       return next(boom.badData("User not found"));
//     }
//     res.json({ ok: true, user });
//   } catch (error) {
//     return next(boom.badData(error.message));
//   }
// };


module.exports = {
    createBill,
    getBills
//   getUsers,
//   getUser,
//   editUser,
//   deleteUser
};