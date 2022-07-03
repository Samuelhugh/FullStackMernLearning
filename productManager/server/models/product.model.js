// Mongoose is a MongoDB library that will also act as a link (driver) between our Server and Database
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String },
  },
  {
    // This is for createdAt and updatedAt, Must be Plural!
    timestamps: true,
  }
);

module.exports = new mongoose.model("Product", ProductSchema);
