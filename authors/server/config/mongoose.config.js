const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/authors";

mongoose
  .connect(mongoURI, {
    // I use these to get rid of Deprecation messages in my terminal
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO MONGODB"))
  .catch((err) => console.log("ERROR IN DB CONNECTION: ", err));
