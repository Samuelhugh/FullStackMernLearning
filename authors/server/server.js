//Note: the order we write these lines in matter. Stick to this order for proper functionality.

// Importing and Requiring Express API Server for this file
const express = require("express");
// Need to import cors
const cors = require("cors");
// Creating my Application Instance
const app = express();
const port = 8000;

// Express middle-ware, Allows JSON Objects to be Posted
app.use(express.json());
// This Express middle-ware allows JSON Objects with "Strings" and "Arrays"
app.use(express.urlencoded({ extended: true }));

// Adding CORS functionality in order to use my React Front-end with the Express API Server Back-end, Also using Express middle-ware
app.use(cors());

// Importing Configuration (MongoDB connection) file
require("./config/mongoose.config");

// Importing Routes Export and Invoking it
require("./routes/author.routes")(app);

// Listening for Port Connection
app.listen(port, () => console.log(`Listening on Port: ${port}`));
