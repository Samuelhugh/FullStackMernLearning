const PersonController = require("../controllers/person.controller");

module.exports = (app) => {
  app.get("/api", PersonController.index);
  // Create Route
  app.post("/api/people", PersonController.createPerson);
  // Can be the same Route as POST as long I have a different "http Verb"
  app.get("/api/people", PersonController.getAllPeople);
  // Params must match the Controllers's Params EXACTLY
  app.get("/api/people/:id", PersonController.getOne);
  // Update Route
  app.put("/api/people/:id", PersonController.updatePerson);
  // Delete Route
  app.delete("/api/people/:id", PersonController.deletePerson);
};
