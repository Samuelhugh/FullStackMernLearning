const Person = require("../models/person.model");

const index = (req, res) => {
  // Key: Value pair
  // This is where I set the API's response to the Requesting client
  res.json({ message: "Hello World!" });
};

// Find All
const getAllPeople = (req, res) => {
  Person.find({})
    .then((persons) => {
      // console logs are optional, but they are highly recommended for Troubleshooting, and seeing the Flow of Data!
      console.log(persons);
      res.json(persons);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

// Find One
const getOne = (req, res) => {
  Person.findById({ _id: req.params.id })
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
};

// Create Person
// Mongoose's "create" method is run using my Person Model to add a new Person to my DB's Person Collection
const createPerson = (req, res) => {
  // This will use whatever the body of the client's request sends over
  Person.create(req.body)
    // Using Express "status" Middle-ware
    .then((person) => res.status(201).json(person))
    .catch((err) => res.status(500).json(err));
};

// Update
const updatePerson = (req, res) => {
  Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPerson) => {
      console.log(updatedPerson);
      res.json(updatedPerson);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

// Delete
const deletePerson = (req, res) => {
  // NOTE: "id" here MUST match id in corresponding route
  Person.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => {
      console.log(deleteConfirmation);
      res.json(deleteConfirmation);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Exporting the Logic I need for my Routes
module.exports = {
  index,
  getAllPeople,
  getOne,
  createPerson,
  updatePerson,
  deletePerson,
};
