
const expressionEl = document.querySelector(".expression input");
const numberButtonsEl = document.querySelectorAll(".btn.number");
const clearButton = document.querySelector(".btn.clear");

var expression = "";

expressionEl.value = "";

function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    var sum = num1 - num2;
    return sum;
}

function multiply(num1, num2) {
    var sum = num1 * num2;
    return sum;
}

function divide(num1, num2) {
    var sum = num1 / num2;
    return sum;
}

function operate(num1, num2, operator) {
    var result = operator(num1, num2);
    return result;
}

function setExpression(value) {
    expression = value;
    expressionEl.value = expression;
}

function addToExpression(value) {
    expression += value;
    setExpression(expression);
}

numberButtonsEl.forEach(button => {
    button.addEventListener("click", () => {
        addToExpression(button.innerHTML);
    });
});

clearButton.addEventListener("click", () => {
    setExpression("");
});

