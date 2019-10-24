var console = require("console");
var http = require('http')

module.exports.function = function give_suggestion () {


//var suggestion_array = ["abd", "efg", "hij"]

  var test = ["hello", "world", "test"]

  return test[Math.floor(Math.random() * 3)]
}
