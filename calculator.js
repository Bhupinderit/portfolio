// Selecting the display and all buttons
const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.btn');

// Variables to keep track of the calculation
let currentInput = '';  // Holds the current number or operator
let previousInput = ''; // Holds the previous number
let operation = null;   // Holds the selected operation (+, -, *, /)

// Loop through each button and add event listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;

        if (!isNaN(action) || action === 'decimal') {
            handleNumber(action);
        } else {
            handleOperation(action);
        }
    });
});

// Handle numbers and decimals
function handleNumber(number) {
    if (number === 'decimal') {
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
    } else {
        currentInput += number;
    }
    updateDisplay(currentInput);
}

// Handle operations (+, -, *, /, C, ←, %)
function handleOperation(action) {
    switch (action) {
        case 'clear':
            currentInput = '';
            previousInput = '';
            operation = null;
            updateDisplay('0');
            break;
        case 'delete':
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput || '0');
            break;
        case 'percent':
            currentInput = (parseFloat(currentInput) / 100).toString();
            updateDisplay(currentInput);
            break;
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            handleMathOperation(action);
            break;
        case 'equals':
            if (operation) {
                calculateResult();
            }
            break;
        default:
            break;
    }
}

// Handle math operations (+, -, *, /)
function handleMathOperation(op) {
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculateResult();
        }
        previousInput = currentInput;
        currentInput = '';
        operation = op;
    }
}

// Perform the calculation
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case 'add':
            result = prev + current;
            break;
        case 'subtract':
            result = prev - current;
            break;
        case 'multiply':
            result = prev * current;
            break;
        case 'divide':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay(currentInput);
}

// Update the calculator display
function updateDisplay(value) {
    display.value = value;
}
