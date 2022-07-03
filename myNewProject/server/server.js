// Importing my API Server, so my Application can handle http requests
const express = require("express");
// Setting my app instance
const app = express();
// Setting up my Port
const port = 8000;
// Importing CORS functionality
const cors = require("cors");

// Adding CORS functionality in order to use my React Front-end with the Express API Server Back-end, Also using Express middle-ware
app.use(cors());

// Express middle-ware, this allows JSON Objects to be Posted
app.use(express.json());

// Express middle-ware, this allows JSON Objects with strings and arrays
app.use(express.urlencoded({ extended: true }));

// Importing the Configuration file
require("./config/mongoose.config");

// Importing the Routes Export and Invoking it
require("./routes/person.routes")(app);

// Listening for the Port
app.listen(port, () => console.log(`Listening on Port ${port}`));
