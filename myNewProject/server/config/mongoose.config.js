const mongoose = require("mongoose");

// This will create a Database if one doesn't already exist (no need for mongo shell)
// Customer Relationship Management (CRM) Software
mongoose
  .connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the Database"))
  .catch((err) =>
    console.log("Something went wrong when connection to Database: ", err)
  );
