// Mongoose is a MongoDB library that will also act as a link (driver) between our Server and Database
const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "Author Name is Required!"],
      minlength: [3, "Must be 3 characters or longer!"],
    },
  },
  {
    // This is for createdAt and updatedAt, Must be Plural!
    timestamps: true,
  }
);

module.exports = new mongoose.model("Author", AuthorSchema);
