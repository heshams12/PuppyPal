const db = require("../models");

module.exports = {    
    findAllPuppies: function (req, res) {
        db.puppies.findAll({})
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    },
    findOnePuppy: function (req, res) {
        db.puppies.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    },
    postPuppy: function (req, res) {
        console.log(req.body);
        db.puppies.create({
            name: req.body.name,
            gender: req.body.gender,
            breed: req.body.breed,
            age: req.body.age, 
            info: req.body.info, 
            location: req.body.location, 
            image: req.body.image
        })
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    },
    deletePuppy: function (req, res) {
        db.puppies.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    },
    changePuppy: function (req, res) {
        db.puppies.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    }
}; 