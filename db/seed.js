const db = require("../models");

const parents = [
  {
    name: "Cody Edwards",
    age: 34
  },
  {
    name: "Keinan Buch",
    age: 30
  },
  {
    name: "Eric Fahlgren",
    age: 40
  }
];

const children = [
  {
    name: "Elena Edwards",
    age: 6,
    ParentId: 1
  },
  {
    name: "Adam Edwards",
    age: 10,
    ParentId: 1
  },
  {
    name: "Mary Buch",
    age: 2,
    ParentId: 2
  },
  {
    name: "Zach Fahlgren",
    age: 14,
    ParentId: 3
  },
  {
    name: "Donovan Fahlgren",
    age: 12,
    ParentId: 3
  }
];

db.sequelize.sync().then(() => {

  db.Parent.bulkCreate(parents)
    .then(() => {
      db.Child.bulkCreate(children);
    })
    .finally(() => {
      console.log("All done.");
    });

});
