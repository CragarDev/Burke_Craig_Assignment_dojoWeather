console.log();

// ? -- dojoWeather
//

/* 
DojoWeather

Using HTML, CSS, and JS recreate the look and functionality of the following website.
The Yellow Belt will have a similar set of feature requirements.
The cropped images can be downloaded here.
*/

/* 
// 1. Recreate the look of the Weather Forecast page using HTML and CSS
// Use position: fixed; to position the cookie policy message at the bottom of the page
// When a user clicks on a city, alert the message "Loading weather report..."
// When the user accepts the cookie policy, hide the fixed message
// Challenge: When the user changes the <select> convert the temperatures from Celsius to Fahrenheit
*/

// Variables
const temperatures = document.querySelectorAll(".tempDegree");
const userSelectDegree = document.querySelector("#tempSel");
const temps = [];
for (var i = 0; i < temperatures.length; i++) {
  temps.push(temperatures[i].innerText);
}

// console.log(temps);

// console.log(userSelectDegree.value);
// console.log(temperatures);

// for (var i = 0; i < temperatures.length; i++) {
//   console.log(temperatures[i].innerText);
// }

//
// function to remove an html section
function remove(e) {
  e.remove();
}

// function to change Celsius to Fahrenheit and update the DOM
// °F = (°C × 9/5) + 32 - the formula
//
function changeDegree() {
  if (userSelectDegree.value == "F") {
    for (var i = 0; i < temps.length; i++) {
      temperatures[i].innerText = Math.floor((temps[i] * 9) / 5 + 32);
    }
  } else {
    for (var i = 0; i < temps.length; i++) {
      temperatures[i].innerText = temps[i];
    }
  }
}

console.log();
