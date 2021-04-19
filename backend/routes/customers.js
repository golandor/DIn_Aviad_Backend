const router = require('express').Router();
let Customer = require('../models/customer.model');

//* Get all Customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//* Get Customer by Id
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.json(customer);
    } catch (err) {
        res.json({
            message: err
        });
    }

});

//* Add Customer
router.post("/add", async (req, res) => {
    const customerName = req.body.customerName;
    const contactName = req.body.contactName;
    const contactNumber = req.body.contactNumber;

    const newCustomer = new Customer({
        customerName,
        contactName,
        contactNumber
    });
    try {
        const saveCustomer = await newCustomer.save();
        console.log("saved");
        res.json(saveCustomer);
    } catch (err) {
        console.log("err", err);

        res.json({
            message: err
        });
    }
})

//* Delete Customer By Id
router.delete("/:id", async (req, res) => {
    try {
        console.log("delete:", req.params.id)
        const customer = await Customer.deleteOne({
            _id: req.params.id
        });
        res.json(customer);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//* Update Customer By Id
router.route('/:id').patch(async (req, res) => {
    try {
        let data = {};
        for (var key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                let value = req.body[key];
                data[key] = value;
            }
        }
        const customer = await Customer.updateOne(
            { _id: req.params.id },
            { $set: data }
        );
        console.log(`Customer with id: ${req.params.id} was updated with data: `, data);
        res.json(customer);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
module.exports = router;
