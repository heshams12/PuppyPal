module.exports = {
    renderAdopt: function(req, res) {
      res.render("../views/adopt.handlebars", {
        msg: "Welcome! this is data being passed into the render method!"
      });
    } 
  };