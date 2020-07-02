// With this code I am using express to establish a Router and then export it and all the associated routes I will create in the file. In other words everything that I place in this file will communicate back and forth with my server along a Router.
const router = require("express").Router();

// Importing (admin-modules)
const Admins = require("../modules/admin-module.js");

router.get("/:id", (req, res) => {
  Admins.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err, message: "Unable to locate Admin" });
    });
});

module.exports = router;
