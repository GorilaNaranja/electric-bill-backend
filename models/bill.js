const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const billSchema = new Schema({
    Fecha: {
        type: String,
        required: [true, "Fecha is required"]
    },
    Hora: {
        type: String,
        required: [true, "Hora is required"]
    },
    Consumo: {
        type: String,
        required: [true, "Consumo is required"]
    },
    Precio: {
        type: Date,
        required: [true, "Precio is required"]
    },
    Coste: {
        type: String,
        required: [true, "Coste is required"]
    }
});

module.exports = mongoose.model("Bill", billSchema);