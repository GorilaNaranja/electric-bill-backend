const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const billSchema = new Schema({
    date: {
        type: Date,
        required: [true, "Date is required"]
    },
    hour: {
        type: Number,
        required: [true, "Hour is required"]
    },
    consumption: {
        type: Number,
        required: [true, "Consumption is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    cost: {
        type: Number,
        required: [true, "Cost is required"]
    }
});

module.exports = mongoose.model("Bill", billSchema);