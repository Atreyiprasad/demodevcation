const rangeInput = document.getElementById('customRange1');
const rangeValue = document.getElementById('rangeValue');

rangeInput.addEventListener('input', () => {
  rangeValue.textContent = rangeInput.value;
});



