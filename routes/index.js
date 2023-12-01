var express = require('express');
var router = express.Router();

var userModel = require("./form");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("index");
});

// router
router.post("", async function (req, res, next) {
  const phone = req.body.phone,
    email = req.body.email,
    fullname = req.body.fullname,
    address = req.body.address,
    message = req.body.message;

  try {
    const user = new userModel({
      fullname: fullname,
      phone: phone,
      email: email,
      address: address,
      message: message,
    });

    await user.save();
    console.log(user);
    res.redirect("/");
  } catch (error) {
    console.error('Error saving user:', error);
    // Handle the error appropriately, e.g., send an error response to the client
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
