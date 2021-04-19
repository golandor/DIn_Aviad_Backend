const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerName: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    itemDescription: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    itemCode: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    amount: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    },
    price: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    },
    quarterly: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    },
    year: {
        type: Number,
        required: false,
        unique: false,
        trim: true,
    }
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


