function convertTemp() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  if (celsiusInput.value === "" && !isNaN(fahrenheitInput.value)) {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    celsiusInput.value = celsiusValue.toFixed(2);
  } else if (fahrenheitInput.value === "" && !isNaN(celsiusInput.value)) {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  } else {
    alert("Please enter a valid number");
  }
}

function resetFields() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  celsiusInput.value = "";
  fahrenheitInput.value = "";
}
