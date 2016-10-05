var express = require('express');
var router = express.Router();
var models = require('../models/users');
var users = models();
/* GET users listing. */
router.get('/new', function(req, res, next) {
  console.log(users);
  res.render('users/new', {
    title: 'Sign Up'
  });
});


router.post('/', function(req, res) {
  var newUser = users.build({
    first_name: req.body.first,
    second_name: req.body.second,
    email: req.body.email,
    username: req.body.user,
    password: req.body.user
  });

  newUser.save().then(function() {
    console.log('saved');
  });
});

router.get('/welcome', function(req, res, next) {
  res.render('users/welcome', {
    title: 'Welcome To Stay Home'
  });
});

module.exports = router;
