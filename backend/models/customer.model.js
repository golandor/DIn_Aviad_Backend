const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerName: {
        type: String,
        required: false,
        unique: false,
        trim: true,
        // minlength: 3
    },
    contactName: {
        type: String,
        required: false,
        unique: false,
        trim: true,
        // minlength: 3
    },
    contactNumber: {
        type: String,
        required: false,
        unique: false,
        trim: true,
        // minlength: 9
    }
}, {
    timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;