
function convertTemperature() {

    let temperature = document.getElementById("temperature").value;

    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    let result = document.getElementById("result");

    // Validate input
    if (temperature === "" || !Number.isFinite(Number(temperature))) {
        result.innerHTML = "Please enter a valid number!";
        return;
    }

    let temp = Number(temperature);

    // Convert input to Celsius first
    let celsius;

    if (fromUnit === "Celsius") {
        celsius = temp;
    }
    else if (fromUnit === "Fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
    }
    else {
        celsius = temp - 273.15;
    }

    // Convert Celsius to selected unit
    let converted;

    if (toUnit === "Celsius") {
        converted = celsius;
    }
    else if (toUnit === "Fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
    }
    else {
        converted = celsius + 273.15;
    }

    // Kelvin cannot be negative
    if (celsius < -273.15) {
        result.innerHTML = "Temperature cannot be below absolute zero!";
        return;
    }

    let symbol = {
        Celsius: "°C",
        Fahrenheit: "°F",
        Kelvin: "K"
    };

    result.innerHTML =
        temp + " " + symbol[fromUnit] +
        " = " + converted.toFixed(2) + " " + symbol[toUnit];
}
