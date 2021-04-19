const router = require('express').Router();
let Product = require('../models/product.model');

//* Get all Products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
//* Get Product by Id
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//* Add Product
router.post("/add", async (req, res) => {
    const itemCode = req.body.itemCode;
    const itemDescription = req.body.itemDescription;
    const categorie = req.body.categorie;
    const purchasePrice = req.body.purchasePrice;
    const supplier = req.body.supplier;

    const newProduct = new Product({
        itemCode,
        itemDescription,
        categorie,
        purchasePrice,
        supplier
    });
    try {
        const saveProduct = await newProduct.save();
        console.log("saved");
        res.json(saveProduct);
    } catch (err) {
        res.json({
            message: err
        });
    }
})


//* Delete Product By Id
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.deleteOne({
            _id: req.params.id
        });
        res.json(product);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//* Update Product By Id
router.route('/:id').patch(async (req, res) => {
    try {
        let data = {};
        for (var key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                let value = req.body[key];
                data[key] = value;
            }
        }
        const product = await Product.updateOne(
            { _id: req.params.id },
            { $set: data }
        );
        console.log(`Product with id: ${req.params.id} was updated with data: `, data);
        res.json(product);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;