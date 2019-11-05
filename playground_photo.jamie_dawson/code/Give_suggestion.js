var console = require("console");
var http = require('http')

module.exports.function = function give_suggestion () {

  var suggestions = [
   "Take a photo of your favorite building in the city.",
   "Take a photo of an abandoned building.", 
   "Take a photo of a building being built.",
   "Take a photo of an old building.",
    "Take a photo of ugly building.",
    "Take a photo of your favorite diner.",
    "Take a photo of your favorite dessert",
    "Take a photo of your favorite flower.",
    "Take a photo of your least favorite plant.",
    "Take a photo of Dangerous plant.",
    "Take a photo of a plant that has your favorite color.",
    "Take a photo of the biggest tree near you.",
    "Take a photo of a plant that is not fully grown.",
    "Take a photo in the woods while it's raining.",
    "Take a photo of the rain from inside your home.",
    "Take a photo of a cloud.",
    "Take a photo of a very cloudy day.",
    "Take a photo of a sky with no clouds.",
    "Take a photo of your favorite car.",
    "Take a photo of your least favorite car.",
    "Take a photo of a destroyed car.",
    "Take a photo of a car with your favorite color.",
    "Take a photo of a car you'd never want to drive.",
    "Take a photo of a happy couple",
    "Take a photo of a couple in a park",
    "Take a photo of a couple spending time together",
   "Take a photo of a couple having fun together.",
    "Take a photo of a dog running.",
    "Take a photo of a dog sleeping.",
    "Take a photo of a dog obeying a command.",
    "Take a photo of a dog begging for a treat.",
    "Take a photo of a cat sleeping.",
    "Take a photo of a cat playing.",
    "Take a photo of a cat climbing on stuff.",
    "Take a photo of a bird in their nest.",
    "Take a photo of baby birds.",
    "Take a photo of a bird flying.",
    "Take a photo of your favorite bird.",
    "Take a photo of the strangest looking bird in your city.",
    "Take a photo of your best friend",
    "Take of a photo of the first you've known the longest.",
    "Take a photo of your parents doing something they love.",
    "Take a photo of your favorite candy.",
    "Take a photo of the candy you hate.",
    "Take a photo of the sweetest candy you enjoy.",
    "Take a photo of your favorite chocolate candy.",
    "Take a photo of a fireplace with a fire inside it.",
    "Take a photo of a campfire.",
    "Take a photo of a fire dancer.",
    "Take a photo of a lake.",
    "Take a photo of people playing in a pool.",
    "Take a photo of someone relaxing by the water.",
    "Take a photo of the wind moving something.",
    "Take a photo of yourself in the woods.",
    "Take a photo of yourself at your favorite area in the city.",
    "Take a photo of yourself doing something you love.",
    "Take a photo of yourself trying something new.",
    "Take a photo of a place you like to relax.",
    "Take a photo of a person in a costume.",
    "Take a photo of someone wearing a cool outfit.",
    "Take a photo of someone playing sports.",
    "Take a photo of someone playing a sport you've never played before."
   ];

  var img = [
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg",
    "images/6.jpeg",
    "images/7.jpeg"
    ];

var all = {   text: suggestions[Math.floor(Math.random() * 62)],
   random_pic: {
     url: img[Math.floor(Math.random() * 7)]
   }
  }
 return all 
}
