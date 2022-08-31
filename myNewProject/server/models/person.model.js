// Importing Mongoose
const mongoose = require("mongoose");

// Creating my Person Schema by using the Mongoose framework
// Is the "new" require?
const PersonSchema = new mongoose.Schema(
  {
    // Setting up my Fields this way allows for Validations
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
  },
  // This is for createdAt and updatedAt, Must be Plural!
  { timestamps: true }
);

// Exporting the Model
// "new" Required for model only
module.exports = new mongoose.model("Person", PersonSchema);
