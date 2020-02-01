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
// iv. if there's already entries in local storage for that day, it should show on the page at right times

var inputValue = $("#currentDate").text(
  moment().format("MMMM Do, YYYY, h:mm a")
);

var monthDayYear = moment().format("MMMM Do, YYYY");

$(".saveButton").on("click", function() {
  event.preventDefault();
  var eventTimeStringify = JSON.stringify($(".time"));
  var eventDescription = $(this).siblings(".textInput")[0].value;
  var eventTime = $(this).siblings(".time")[0].innerText;
  var dataId = $(this)
    .siblings(".time")
    .attr("data-id");
  localStorage.setItem(dataId, eventDescription);
});

function init() {
  // var getItem = localStorage.getItem();
  $(".time").each(function(i, time) {
    var dataId = time.getAttribute("data-id");
    var activity = localStorage.getItem(dataId);
    var textInput = $(this).siblings(".textInput");
    if (activity != null) {
      textInput.val(activity);
    }
  });
}
init();
