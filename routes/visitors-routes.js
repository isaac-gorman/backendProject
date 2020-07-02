const router = require("express").Router();

// Importing the kennels-module and storting it within Kennels var
const Kennels = require("../modules/kennels-module.js");

// HTTP request to READ data.
// All data must include the "/kennels" url at the begining
// Kennels.find() is requesting all that data that meets that URL within the kennel-module imported above.
// .then((data)) is the results of that URL now we return it with the response object within the .json format

// Get Kennels for Visitors ("api/visitors/kennels")
router.get("/kennels", (req, res) => {
  Kennels.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Kennels", error: "err" });
    });
});

// Get Kennel Id's for Visitors ("api/visitors/kennels/:id")
router.get("/kennels/:id", (req, res) => {
  Kennels.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Kennel", error: err });
    });
});
// The difference between this route and the previous route is thatw we are passing an "id" in the URL.
// I am accessing the "id" by using  "req.params.id" and passing it to the "findById()" function
// This route is almost identical as above expect we are looking for the kennel id's and passing the results to the .findById() function

// Importing the dog-module
const Dogs = require("../modules/dogs-module.js");

// Get Dogs for Visitors
router.get("/dogs", (req, res) => {
  Dogs.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Dogs", error: err });
    });
});

// Get Dog Id's for Visitors
router.get("/dogs/:id", (req, res) => {
  Dogs.findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Dog", error: err });
    });
});

// Importing our Breeds Module form breeds-module.js
const Breeds = require("../modules/breeds-module.js");

router.get("/breeds/:id", (req, res) => {
  Breeds.findBreeds(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Breed", error: err });
    });
});

// Importing "notification-module.js"
const Notifications = require("../modules/notification-module.js");

router.post("/notifications", (req, res) => {
  const date_sent = Date.now();
  const notification = { ...req.body, date_sent };
  Notifications.add(notification)
    .then((data) => res.status(201).json(...data))
    .catch((err) => {
      res.status(500).json({
        error: err,
        message:
          "Unable to post   notification. Please make sure to include your admin_id and dog_id",
      });
    });
});

module.exports = router;
