const Solve = (char) => {
    let display = document.getElementById("display");
    display.value += char;
}

const Clear = () => {
    document.getElementById("display").value = "";
    document.getElementById("error").value = "";
}

const Backspace = () => {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

const Result = () => {
    let display = document.getElementById("display");
    let expression = display.value;
    try {
        error.value = eval(expression);
    } catch(err) {
        display.value = "";
        let error = `${expression} is not a valid expression.`;
        document.getElementById("error").value = error;
    }
}