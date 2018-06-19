var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", (res)=> {
        cb(res);
      });
    }, 
    insertOne: function(newBurger, cb) {
        orm.insertOne("burgers", "burger_name", newBurger, (res) => {
            cb(res);
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne("burgers", "devoured", true, id, (res) => {
            cb(res);
        });
    },
    deleteOne: function(id, cb) {
        orm.deleteOne("burgers", id, (res) => {
            cb(res);
        });
    },
    deleteDevoured: function (cb) {
        orm.deleteMany("burgers", "devoured", 1, (res) => {
            cb(res);
        })
    }

  };
  
 
  module.exports = burger;