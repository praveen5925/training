const display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    const lastChar = currentInput.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
    } else {
        currentInput += op;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteChar() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        // Prevent extremely long decimals
        if (currentInput.length > 10) {
            currentInput = parseFloat(currentInput).toPrecision(10).replace(/\.?0+$/, '');
        }
    } catch (e) {
        currentInput = 'Error';
    }
    updateDisplay();
    if (currentInput === 'Error') {
        setTimeout(clearDisplay, 1500);
    }
}
