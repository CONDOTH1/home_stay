var validator = require('validator');

var Sequelize = require('sequelize');

var sequelize = new Sequelize('home_stay_development', null, null, {
  dialect: "postgres",
  port: 5432,
});

sequelize
.authenticate()
.then(function(err){
  console.log('Connection has been established successfully.');
}, function(err) {
  console.log('Unable to connect to the database:', err);
});

module.exports = function(){

var User = sequelize.define('user', {

  first_name: {type: Sequelize.STRING, validate: {notEmpty: {msg: 'First name required'}}},
  second_name: Sequelize.STRING,
  email: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

sequelize.sync();

return User;
};
