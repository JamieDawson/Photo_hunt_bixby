var console = require("console");
const CONTENT = require("content.js");
var http = require('http')

module.exports.function = function give_suggestion () {
  console.log(CONTENT);

  var all = CONTENT;

  for (var i = 0; i < all.lenght; i++)
  { 
      console.log("w")

  }



  return CONTENT;
}
