const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    itemCode: {
        type: String,
        required: false,
    },
    itemDescription: {
        type: String,
        required: false
    },
    categorie: {
        type: String,
        required: false,
    },
    purchasePrice: {
        type: Number,
        required: false,
    },
    supplier: {
        type: String,
        required: false,
    },
}, {
    timestamps: false,
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;