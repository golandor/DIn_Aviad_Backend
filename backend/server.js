const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on("error", err => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB databse connection established successfully");
});

const productsRouter = require("./routes/products");
const customersRouter = require("./routes/customers");
const suppliersRouter = require("./routes/suppliers");
const ordersRouter = require("./routes/orders");

app.use("/products", productsRouter);
app.use("/customers", customersRouter);
app.use("/suppliers", suppliersRouter);
app.use("/orders", ordersRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
