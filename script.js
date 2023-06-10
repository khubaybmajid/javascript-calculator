let firstNumber = '0';
let secondNumber = '';
let currentOperator = '';
const display = document.querySelector('#display');

const clear = document.querySelector('#clear').addEventListener('click', () => {
  display.textContent = '';
  firstNumber = '0';
  secondNumber = '';
  currentOperator = '';
});

const operator = document.querySelectorAll('#plus, #minus, #times, #divide');
operator.forEach((button) => {
  button.addEventListener('click', () => {
    display.textContent += button.textContent;
    currentOperator = button.textContent;
  });
});

const numbers = document.querySelectorAll('#num0, #num1, #num2, #num3, #num4, #num5, #num6, #num7, #num8, #num9');
numbers.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentOperator === '') {
      display.textContent += button.textContent;
      firstNumber += button.textContent;
    } else {
      display.textContent += button.textContent;
      secondNumber += button.textContent;
    }
  });
});

const calculation = document.querySelector('#calculate');
calculation.addEventListener('click', () => {
  let result;
  if (currentOperator === '+') {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);   
  } else if (currentOperator === '-') {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (currentOperator === '*') {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (currentOperator === '/') {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }
  else {
    // Handle the case where the operator is not supported
    display.textContent = 'Error: Unsupported operator';
    return;
  }
  display.textContent = result.toString();
  firstNumber = result;
  secondNumber = '';
  currentOperator = '';
});
