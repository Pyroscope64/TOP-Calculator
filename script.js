let num1 = "", num2 = "";
let currentNum = "num1";
let operator = "", calculate = 1;
let display = document.getElementById("displaytext");
let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");
let plusOrMinus = document.getElementById("plusminus");
let equals = document.getElementById("equals");
let numberButtons = Array.from(document.getElementsByClassName("number"));
let operators = Array.from(document.getElementsByClassName("operation"));

function Display() {
    display.textContent = `${num1} ${operator} ${num2}`;
}

function SwitchNum() {
    if (currentNum === "num1") {
        currentNum = "num2";
    }
    else if (currentNum === "num2") {
        currentNum = "num1";
    };
}

equals.addEventListener("click", () => Calculate());
function Calculate() {
    switch(operator) {
        case "+":
            num1 = +num1 + +num2;
            break;
        case "-":
            num1 = num1 - num2;
            break;
        case "÷":
            num1 = num1 / num2;
            break;
        case "x":
            num1 = num1 * num2;
            break;
        default:
            console.log("no operator");
    }
    num2 = "";
    display.textContent = `${num1}`; 
    Display();
}

clear.addEventListener("click", function Clear() {
    display.textContent = "";
    num1 = 0;
    num2 = 0;
    currentNum = "num1";
});

backspace.addEventListener("click", function Back() {
    if (currentNum === "num1" && num1.length > 0) {
        num1 = num1.slice(0, -1);
    }
    else if (currentNum === "num2" && num2.length > 0) {
        num2 = num2.slice(0, -1);
    }
    Display();
});

plusOrMinus.addEventListener("click", function Append() {
    if (currentNum === "num1" && num1.startsWith("-")) {
        num1 = num1.slice(0, 1);
    }
    else if (currentNum === "num1" && !(num1.startsWith("-"))) {
        num1 = `-${num1}`;
    }
    else if (currentNum === "num2" && num2.startsWith("-")) {
        num2 = num2.slice(0, 1);
    }
    else if (currentNum === "num2" && !(num2.startsWith("-"))) {
        num2 = `-${num2}`;
    }
    Display();
})

numberButtons.forEach((button) => 
    button.addEventListener("click", () => AddNum(button.textContent))
);
function AddNum(number) {
    if (number === ".") {
        if (currentNum === "num1" && !(num1.includes("."))) {
            num1 = `${num1}${number}`;
        }
        else if (currentNum === "num2" && !(num2.includes("."))) {
            num2 = `${num2}${number}`
        }
    }
    else {
        if (currentNum === "num1") {
            num1 = `${num1}${number}`;
        }
        else if (currentNum === "num2") {
            num2 = `${num2}${number}`;
        };
    }
    Display();
}

operators.forEach((button) =>
    button.addEventListener("click", () => Operation(button.textContent))
);
function Operation(op) {
    Calculate();
    operator = op;
    currentNum = "num2";
    Display();
}