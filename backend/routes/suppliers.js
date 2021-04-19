const router = require('express').Router();
let Supplier = require('../models/supplier.model');

//* Get all Supplier
router.get('/', async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//* Get Supplier by Id
router.get('/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        res.json(supplier);
    } catch (err) {
        res.json({
            message: err
        });
    }

});

//* Add Supplier
router.post("/add", async (req, res) => {
    const supplier = req.body.supplier;

    const newSupplier = new Supplier({
        supplier
    });
    try {
        const saveSupplier = await newSupplier.save();
        console.log("saved");
        res.json(saveSupplier);
    } catch (err) {
        console.log("err", err);

        res.json({
            message: err
        });
    }
})

//* Delete Supplier By Id
router.delete("/:id", async (req, res) => {
    try {
        console.log("delete:", req.params.id)
        const supplier = await Supplier.deleteOne({
            _id: req.params.id
        });
        res.json(supplier);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//* Update Supplier By Id
router.route('/:id').patch(async (req, res) => {
    try {
        let data = {};
        for (var key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                let value = req.body[key];
                data[key] = value;
            }
        }
        const supplier = await Supplier.updateOne(
            { _id: req.params.id },
            { $set: data }
        );
        console.log(`Supplier with id: ${req.params.id} was updated with data: `, data);
        res.json(supplier);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
module.exports = router;
