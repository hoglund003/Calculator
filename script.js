
const expressionEl = document.querySelector(".expression input");
const numberButtonsEl = document.querySelectorAll(".btn.number");
const clearButton = document.querySelector(".btn.clear");
const operatorButonsEl = document.querySelectorAll(".btn.operator");
const eaqualsButtonEl = document.querySelector(".btn.eaquals");

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
const operatorDict = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
};

function operate(num1, num2, operator) {
    operator = operatorDict[operator]
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

operatorButonsEl.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        addToExpression(" " + operatorButton.innerHTML + " ");
    });
});

eaqualsButtonEl.addEventListener("click", () => {
    var expressionArr = expression.split(" ");
    var num1 = parseInt(expressionArr[0]);
    var operator = expressionArr[1]
    var num2 = parseInt(expressionArr[2]);
    var result = operate(num1, num2, operator);
    setExpression(result);
});

clearButton.addEventListener("click", () => {
    setExpression("");
});

