// Import the Model
const Author = require("../models/author.model");

// With this syntax, we are exporting an object that consists of key:value pairs
// The values consist of the logic used to query the DB
module.exports = {
  // Create One Author
  createAnAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        console.log("INSIDE CREATE CONTROLLER: ", newAuthor);
        res.json(newAuthor);
      })
      .catch((err) => {
        console.log("ERROR IN CREATE CONTROLLER: ", err);
        res.json(err);
      });
  },

  // Find All
  findAllAuthors: (req, res) => {
    Author.find({})
      .sort({ authorName: -1 })
      .then((allAuthors) => {
        // Console logs are optional, But they highly recommended for troubleshooting!
        console.log("INSIDE FIND QUERY CONTROLLER: ", allAuthors);
        res.json(allAuthors);
      })
      .catch((err) => {
        console.log("ERROR IN FIND QUERY CONTROLLER: ", err);
        res.json(err);
      });
  },

  // Find One
  findOneAuthor: (req, res) => {
    Author.findById({ _id: req.params.id })
      .then((oneAuthor) => {
        console.log("INSIDE FIND-ONE QUERY CONTROLLER: ", oneAuthor);
        res.json(oneAuthor);
      })
      .catch((err) => {
        console.log("ERROR IN FIND-ONE QUERY CONTROLLER: ", err);
        res.json(err);
      });
  },

  // Update
  updateAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((authorUpdated) => {
        console.log("INSIDE UPDATE QUERY CONTROLLER: ", authorUpdated);
        res.json(authorUpdated);
      })
      .catch((err) => {
        console.log("ERROR IN UPDATE QUERY CONTROLLER: ", err);
        res.json(err);
      });
  },

  // Delete
  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((deletedAuthor) => {
        console.log("INSIDE DELETE QUERY CONTROLLER: ", deletedAuthor);
        res.json(deletedAuthor);
      })
      .catch((err) => {
        console.log("ERROR IN DELETE QUERY CONTROLLER: ", err);
      });
  },
};
