var router = express.Router();
var express = require("express");
var burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((burgers) => {
    var hbsObject = {
      burger: burgers
    };
    res.render("index", hbsObject);
  });
});

router.post("/order", (req, res) => {
  var toInsert = req.body.burger_name;
  if (toInsert === "") {
  } else {
    console.log(toInsert);
    burger.insertOne(toInsert, (response) => {
      console.log(`Successfully ordered ${toInsert}, ID = ${response.insertId}`);
    });
  }
    res.redirect("/");
  
});

router.put("/devour", (req, res) => {
  var devoured = req.body.id;
  burger.updateOne(devoured, (response) => {
    console.log(response);
  });
  res.redirect("/");
});

router.delete("/cancel", (req, res) => {
  var canceled = req.body.id;
  burger.deleteOne(canceled, (response) => {
    console.log(response);
  });
  res.redirect("/");
});

router.delete("/clear", (req, res) => {
  burger.deleteDevoured((response) => {
    console.log("Cleared!");
    console.log(response);
  });
  res.redirect("/");
});

module.exports = router;
