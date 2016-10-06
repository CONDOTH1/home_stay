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


router.post('/new', function(req, res) {

  req.checkBody('first', 'First name is required').notEmpty();
  req.checkBody('second', 'Second name is required').notEmpty();
  req.checkBody('email', 'Email name is required').notEmpty();
  req.checkBody('email', 'Valid email is required').isEmail();
  req.checkBody('user', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.assert('password', '6 to 20 characters required').len(6, 20);
  req.assert('password_confirmation', 'Passwords must match').equals(req.body.password);



  var errors = req.validationErrors();

  if (errors){
    console.log('There are errors');
    console.log(errors.length);
    // req.flash('error_msg', errors);
    // res.redirect('new');
    res.render('users/new', {title: 'Sign Up', errors: errors});
  } else {
    var newUser = users.build({
      first_name: req.body.first,
      second_name: req.body.second,
      email: req.body.email,
      username: req.body.user,
      password: req.body.user
    });
    newUser.save().then(function() {
      res.redirect('welcome');
      console.log('saved');
    });
  }


  // var newUser = users.build({
  //   first_name: req.body.first,
  //   second_name: req.body.second,
  //   email: req.body.email,
  //   username: req.body.user,
  //   password: req.body.user
  // });


});

router.get('/welcome', function(req, res, next) {
  res.render('users/welcome', {
    title: 'Welcome To Stay Home'
  });
});

module.exports = router;
