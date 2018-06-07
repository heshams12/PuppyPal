
const apiController = require("../controllers/api_controller");

module.exports = function(app) {
  app.get("/api/puppies", apiController.findAllPuppies); 

  app.get("/api/puppies/:id", apiController.findOnePuppy);

  app.post("/api/puppies", apiController.postPuppy); 

  app.put("/api/puppies", apiController.changePuppy);

  app.delete("/api/delete/:id", apiController.deletePuppy); 
}; 