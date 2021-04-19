const router = require('express').Router();
let Order = require('../models/order.model');

//* Get all Order
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//* Get Order by Id
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json(order);
    } catch (err) {
        res.json({
            message: err
        });
    }

});

//* Add Order
router.post("/add", async (req, res) => {
    const customerName = req.body.customerName;
    const itemDescription = req.body.itemDescription;
    const itemCode = req.body.itemCode;
    const amount = req.body.amount;
    const price = req.body.price;
    const quarterly = req.body.quarterly;
    const year = req.body.year;

    const newOrder = new Order({
        customerName,
        itemDescription,
        itemCode,
        amount,
        price,
        quarterly,
        year
    });
    try {
        const saveorder = await newOrder.save();
        console.log("saved");
        res.json(saveorder);
    } catch (err) {
        console.log("err", err);

        res.json({
            message: err
        });
    }
})

//* Delete Order By Id
router.delete("/:id", async (req, res) => {
    try {
        console.log("delete:", req.params.id)
        const order = await Order.deleteOne({
            _id: req.params.id
        });
        res.json(order);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//* Update Order By Id
router.route('/:id').patch(async (req, res) => {
    try {
        let data = {};
        for (var key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                let value = req.body[key];
                data[key] = value;
            }
        }
        const order = await Order.updateOne(
            { _id: req.params.id },
            { $set: data }
        );
        console.log(`Order with id: ${req.params.id} was updated with data: `, data);
        res.json(order);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
module.exports = router;
