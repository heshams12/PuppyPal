const homeController = require("../controllers/home");
const shelterController = require("../controllers/shelter");
const puppiesController = require("../controllers/puppies");
const adoptController = require("../controllers/adopt"); 
const searchController = require("../controllers/search"); 

module.exports = function(app) {
  app.get("/", homeController.renderHome);
  app.get("/shelter", shelterController.renderShelter); 
  app.get("/puppies", puppiesController.renderPuppies);
  app.get("/adopt", adoptController.renderAdopt);
  app.get("/search", searchController.renderSearch);
}; 