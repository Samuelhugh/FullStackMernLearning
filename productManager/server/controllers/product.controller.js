// Import the model from the model file
const Product = require("../models/product.model");

// Create One Product
const createAnProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.json("ERROR IN CREATE CONTROLLER", err));
};

// Find All
const findAllProducts = (req, res) => {
  Product.find({})
    .then((persons) => {
      // Why are there sometimes parenthesis?
      // Console logs are optional, But they highly recommended for troubleshooting!
      console.log(persons);
      res.json(persons);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

// Find One
const findOneProduct = (req, res) => {
  Product.findById({ _id: req.params.id })
    .then((product) => {
      console.log(product);
      res.json(product);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

// Update
const updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedProduct) => {
      console.log("UPDATE: ", updatedProduct);
      res.json(updatedProduct);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete
const deleteProduct = (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id })
    .then((deleteConfirmation) => {
      console.log("DELETE: ", deleteConfirmation);
      res.json(deleteConfirmation);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createAnProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
  deleteProduct,
};
