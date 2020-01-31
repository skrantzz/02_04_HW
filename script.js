// create css html read me inside folder
// I. HTML
// A. header
// i. h1
// ii. <p>
// iii. current day
// B. container that holds calendar (class =container)
// i. each time is separate div
// - separate row (class=row)
// - columns:
// a. time - col-md-1
// b. input - col 10
// c. button - col 1
// ii. save button on right
// iii. form for inputting text
// iv. color code
// -gray - past
// -red - present
// -green - future

// II. JS
// A. current day function (moment.js)
// B. calendar
// i. create save feature that captures input field & (on click) saves to my cal
// ii. saving to local storage
// - .setItem
// iii. getting local storage
// - .getItem
var moment = require("moment");

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

// $("#header").text(moment().date());

$(".saveButton").on("click", function() {
  event.preventDefault();
  //   console.log(this);
  var eventDescription = $(this);
  // var eventTime;
  localStorage.setItem(eventTime, eventDescription);
});
