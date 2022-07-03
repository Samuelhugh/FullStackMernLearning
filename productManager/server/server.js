//Note: the order we write these lines in matter. Stick to this order for proper functionality.

// Importing and Requiring Express API Server for this file
const express = require("express");
// Need to import cors, can I just import cors from express?
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
require("./routes/product.routes")(app);
// These two lines are the long-hand notation of the code above. They better show what's going on.
// const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
// personRoutes(app);  <-- invoke the function and pass in the express "app" API server

// Listening for Port Connection
app.listen(port, () => console.log(`Listening on Port: ${port}`));
