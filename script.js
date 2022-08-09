
const expressionEl = document.querySelector(".expression input");
const numberButtonsEl = document.querySelectorAll(".btn.number");

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

numberButtonsEl.forEach(button => {
    button.addEventListener("click", () => {
        var number = button.innerHTML;
        console.log(number);
        expression += number;
        expressionEl.value += number;
    });
});


