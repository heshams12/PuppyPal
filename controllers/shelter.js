module.exports = {
  renderShelter: function(req, res) {
    res.render("../views/shelter.handlebars", {
      msg: "Welcome! this is data being passed into the render method!"
    });
  }
};