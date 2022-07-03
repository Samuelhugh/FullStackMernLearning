// Need to import my Controller Logic to use for my Routes
const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  // Can be the same route as POST as long as we have a different http verb
  app.get("/api/product", ProductController.findAllProducts);
  // Create Route
  app.post("/api/product", ProductController.createAnProduct);
  // Find One Route
  app.get("/api/product/:id", ProductController.findOneProduct);
  // Update Route
  app.put("/api/product/:id", ProductController.updateProduct);
  // Delete Route
  app.delete("/api/product/:id", ProductController.deleteProduct);
};
