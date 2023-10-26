// 

let currentInput = '';

function appendToDisplay(value) {
    document.getElementById('display').value += value;
    currentInput += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    currentInput = '';
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}