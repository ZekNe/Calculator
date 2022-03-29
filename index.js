const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display");

keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;

        if (!action) {
            console.log("number key!");
        }

        if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {
            console.log("operator key!")
        }

        if (action === "decimal") {
            console.log("decimal.key")
        }

        if (action === "clear") {
            console.log("clear key!")
        }

        if (action === "calculate") {
            console.log("equal key!")
        }
    }
})

keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if (action === "clear") {
            display.textContent = "0";
            calculator.dataset.previousKeyType = '';
            calculator.dataset.firstValue = '0';

        };

        if (!action || action === "decimal") {
            if (displayedNum === "0") {
                display.textContent = keyContent;
            }

            if (displayedNum.includes('.')) {
                console.log('Only 1 decimal allowed!')
            }

            else {
                display.textContent = displayedNum + keyContent;
            }
        };

        if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {

            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            calculator.dataset.previousKeyType = "";
            if (displayedNum === "0" || previousKeyType === "operator") {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }

        const calculate = (n1, operator, n2) => {
            let result = "";

            if (operator === "add") {
                result = parseFloat(n1) + parseFloat(n2);
            } else if (operator === "subtract") {
                result = parseFloat(n1) - parseFloat(n2);
            } else if (operator === "multiply") {
                result = parseFloat(n1) * parseFloat(n2);
            } else if (operator === "divide") {
                result = parseFloat(n1) / parseFloat(n2);
            }

            return result;
        };

        if (action === "calculate" && (calculator.dataset.firstValue > 0 || calculator.dataset.firstValue < 0)) {
            let firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

           display.textContent = calculate(firstValue, operator, secondValue);
           calculator.dataset.firstValue = '';
        }       
    }
});

//test



