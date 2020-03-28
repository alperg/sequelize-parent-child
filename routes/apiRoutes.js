const db = require("../models");

module.exports = function(app) {
  app.get("/api/parents/:id?", (req, res) => {
    if(req.params.id) {

      db.Parent.findOne({ 
          where: { id: req.params.id },
          include: [db.Child]
        }).
        then((data) => {
          res.json(data);
        });

    } else {

      db.Parent.findAll({ include: [db.Child] })
        .then((data) => {
          res.json(data);
        });

    }
  });

  app.get("/api/children/:id?", (req, res) => {
    if(req.params.id) {

      db.Child.findOne({ 
          where: { id: req.params.id },
          include: [db.Parent]
        })
        .then((data) => {
          res.json(data);
        });

    } else {

      db.Child.findAll({ include: [db.Parent] })
        .then((data) => {
          res.json(data);
        });

    }
  });
}