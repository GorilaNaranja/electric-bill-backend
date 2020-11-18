const Bill = require("../../models/bill");

// const createUser = async (userData) => {
//   const user = new User({
//     name: userData.name,
//     email: userData.email,
//     password: bcrypt.hashSync(userData.password, 10),
//     role: userData.role,
//     language: userData.language,
//   });
//   const userDB = await user.save();
//   return userDB;
// };

const getBills = async () => {
  const bills = await Bill.find().exec();
  return bills;
};

// const getUser = async (id) => {
//   const user = await User.findById(id).populate("language", "name").exec();
//   return user;
// };

// const editUser = async (id, userData) => {
//   const user = await User.findByIdAndUpdate(id, userData, {
//     new: true,
//     runValidators: true,
//   });
//   return user;
// };

// const deleteUser = async (id) => {
//   const user = await User.findByIdAndRemove(id);
//   return user;
// };

module.exports = {
  getBills,
  // createUser,
  // getUsers,
  // getUser,
  // editUser,
  // deleteUser,
};
