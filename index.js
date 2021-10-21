// Import stylesheets
import './style.css';
import Projects from './projects';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Calculator</h1>`;

//console.log(Projects);

let p = Projects.find((project) => project.statusId === 'running');
console.log(p);

Projects.find((project) => {
  if (project.statusId === 'running') {
    return true;
  }

  return false;
});

/*
setInterval(myTime,100000);

function myTime() {
  const t = new Date();
  document.getElementById("hour").innerHTML = t.toLocaleTime
  String();
}

*/

function round(value, digits) {
  return parseFloat(value).toFixed(digits);
}

function currency(value) {
  return value + ' Eur';
}

var slider = document.getElementById('myRange');
var output = document.getElementById('demo');
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value
slider.oninput = function () {
  output.innerHTML = this.value;
};

const input = document.querySelector('.calculator input[name=range]');
const input1 = document.querySelector('.calculator input[name=amount]');
const recalc = document.getElementById('demo2');
slider.innerHTML = slider.value;
//console.log(input);
//console.log(log);

input.addEventListener('input', updateValue);
input1.addEventListener('keyup', (event) => {
  input.value = event.target.value;
  updateValue(event);
});

function updateValue(e) {
  const value = round(e.target.value, 2);
  myRange.innerHTML = value;

  let property = p.properties.find(function (property) {
    if (property.type === 'fixedYeld') {
      return true;
    }
    return false;
  });

  //fixedYeld
  let fixedYeld = property.value.sk;
  fixedYeld = parseFloat(fixedYeld.slice(0, -6));

  //Bonus
  let bonus = p.bonus;

  //value * (fixedYeld/12)*24 +  ((value/100) * bonus)

  //Final result
  let result = round(value * (fixedYeld / 12) * 24 + (value / 100) * bonus, 2);

  //Refresh DOM

  //amount
  document.querySelector('.calculator .amount').value = value;
  document.querySelector('.calculator .fixed-yield').innerText = currency(
    round((value / 100) * fixedYeld, 2)
  );
  document.querySelector('.calculator .bonus').innerText = currency(
    round((value / 100) * bonus, 2)
  );

  document.querySelector('.calculator .result').innerText = currency(result);
}
