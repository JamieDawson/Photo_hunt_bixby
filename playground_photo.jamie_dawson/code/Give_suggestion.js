var console = require("console");
var http = require('http')

module.exports.function = function give_suggestion () {


//var suggestion_array = ["abd", "efg", "hij"]

  var test = ["hello", "world", "test"];

  var img = ["images/tree.png"];

 // return test[Math.floor(Math.random() * 3)]

var all = {   text: test[Math.floor(Math.random() * 3)],
   random_pic: {
     url: img[0]
   }
   
   }

 return all 

}
