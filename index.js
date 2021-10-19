// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Calculator</h1>`;


/*
setInterval(myTime,100000);

function myTime() {
  const t = new Date();
  document.getElementById("hour").innerHTML = t.toLocaleTime
  String();
}

*/

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value 
slider.oninput = function() {
  output.innerHTML = this.value;
}