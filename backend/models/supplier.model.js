const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    supplier: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    }
}, {
    timestamps: true,
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;