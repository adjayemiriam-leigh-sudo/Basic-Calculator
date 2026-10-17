// get the screen from the page
let screen = document.getElementById("screen");

// add a number or operator to the screen
function addToScreen(value) {
    // if the screen just says 0 (or Error), replace it
    if (screen.value === "0" || screen.value === "Error") {
        screen.value = value;
    } else {
        screen.value = screen.value + value;
    }
}

// clears everything
function clearScreen() {
    screen.value = "0";
}

// deletes the last character
function deleteLast() {
    if (screen.value.length > 1 && screen.value !== "Error") {
        screen.value = screen.value.slice(0, -1);
    } else {
        screen.value = "0";
    }
}

//performs the calculation and displays the result
function calculate() {
    // use eval to evaluate the expression on the screen
    try {
        let answer = eval(screen.value);
        // dividing by zero gives Infinity so I check for that
        if (answer === Infinity || answer === -Infinity || isNaN(answer)) {
            screen.value = "Error";
        } else {
            screen.value = answer;
        }
        // if the answer is too long, display it in exponential notation
        if (screen.value.length > 10) {
            screen.value = answer.toExponential(5);
        }
    } catch (e) { // if eval throws an error, display Error
        screen.value = "Error";
    }
}