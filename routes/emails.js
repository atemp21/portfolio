const express = require("express");
var mailgun = require("mailgun-js");
var api_key = 'key-ae0de2adff224c5ed66c51774eca8493';
var domain = 'aarontempleton.com';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

const router = express.Router();

router.post("", (req, res, next) => {

  var t = req.body.email+'\n'+req.body.name+'\n'+req.body.phone+'\n'+req.body.message;

  var data = {
    from: 'Aaron Templeton <aaron.templeton@live.com>',
    to: "aarontempleton21@gmail.com",
    subject: "Contact from Portfolio",
    text: t
  };

  console.log(data);
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    res.status(201).json({
      message: "email sent",
      responseBody: body
    });
  });


});

module.exports = router;