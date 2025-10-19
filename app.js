
var display = document.getElementById("input");
var resultShown = false;

function press(val) {
    if (resultShown) {
        display.value = "";
        resultShown = false;
    }

    if (display.value === "Error" || display.value === "Error !") {
        display.value = "";
    }
    display.value += val;
}

function clearDis() {
    display.value = "";
}

function delChar() {
    display.value = display.value.slice(0, -1);
}

function calculation() {
    var text = display.value;
    var operator = "+-*/%."

    if (text === "") {
        display.value = "";
        alert("Please enter number and operator.");
        return;
    } else if (operator.includes(text[0]) || operator.includes(text[text.length - 1])) {
        display.value = "Error !"
        return;
    }


    var found = false;

    for (var i = 0; i < text.length - 1; i++) {
        if (operator.includes(text[i]) && operator.includes(text[i + 1])) {
            found = true;
            break;
        }
    }




    if (found) {
        display.value = "Error !";
    } else {
        display.value = eval(text);
        resultShown = true;
    }
}