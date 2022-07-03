// Import my Controller Logic for my Routes
const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  // Can be the same route as POST as long as we have a different http verb
  app.get("/api/authors/all", AuthorController.findAllAuthors);
  // Create Route
  app.post("/api/authors/new", AuthorController.createAnAuthor);
  // Find One Route
  app.get("/api/authors/one/:id", AuthorController.findOneAuthor);
  // Update Route
  app.put("/api/authors/edit/:id", AuthorController.updateAuthor);
  // Delete Route
  app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
};
