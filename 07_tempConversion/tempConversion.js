const convertToCelsius = function (fahrTemp) {
  const celsiusRounded = ((fahrTemp - 32) * (5 / 9)).toFixed(1);
  return Number.parseFloat(celsiusRounded);
};

const convertToFahrenheit = function (celsTemp) {
  const fahrenheitRounded = (celsTemp * (9 / 5) + 32).toFixed(1);
  return Number.parseFloat(fahrenheitRounded);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
