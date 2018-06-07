module.exports = {
  renderPuppies: function(req, res) {
    res.render("../views/puppies.handlebars", {
      msg: "Welcome! this is data being passed into the render method!"
    });
  }
};