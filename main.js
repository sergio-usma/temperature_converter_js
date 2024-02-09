// eslint-disable-next-line no-unused-vars
function convertTemp() {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');

  if (celsiusInput.value === '' && !Number.isNaN(fahrenheitInput.value)) {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    celsiusInput.value = celsiusValue.toFixed(2);
  } else if (fahrenheitInput.value === '' && !Number.isNaN(celsiusInput.value)) {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  } else {
    // eslint-disable-next-line no-alert
    alert('Please enter a valid number');
  }
}

// eslint-disable-next-line no-unused-vars
function resetFields() {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  celsiusInput.value = '';
  fahrenheitInput.value = '';
}
