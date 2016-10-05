
var Sequelize = require('sequelize');


module.exports = {


var sequelize = new Sequelize('home_stay_development', null, null, {
  dialect: "postgres",
  port: 5432,
});

var User = sequelize.define('user', {
  first_name: Sequelize.STRING,
  second_name: Sequelize.STRING,
  email: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

sequelize
.authenticate()
.then(function(err){
  console.log('Connection has been established successfully.');
}, function(err) {
  console.log('Unable to connect to the database:', err);
});

sequelize.sync();
};
