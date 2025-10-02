// Select DOM elements
const tempInput = document.getElementById('tempInput');
const unitSelect = document.getElementById('unitSelect');
const convertBtn = document.getElementById('convertBtn');
const output = document.getElementById('output');

// Convert on button click
convertBtn.addEventListener('click', convertTemp);

// Function to convert temperature
function convertTemp() {
  const temp = parseFloat(tempInput.value);
  const unit = unitSelect.value;
  let celsius, fahrenheit, kelvin;

  if (isNaN(temp)) {
    output.innerHTML = '<p>Please enter a valid number!</p>';
    return;
  }

  if (unit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === "fahrenheit") {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = (temp - 32) * 5/9 + 273.15;
  } else if (unit === "kelvin") {
    celsius = temp - 273.15;
    fahrenheit = (temp - 273.15) * 9/5 + 32;
    kelvin = temp;
  }

  output.innerHTML = `
    <p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
    <p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
    <p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
  `;
}
