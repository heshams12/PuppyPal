module.exports = {
    renderSearch: function(req, res) {
      res.render("../views/search.handlebars", {
        msg: "Welcome! this is data being passed into the render method!"
      });
    }
  };