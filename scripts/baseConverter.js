const form = document.querySelector("#conversion");
const decimalField = document.querySelector("#decField");
const binaryField = document.querySelector("#binField");
const convertButton = document.querySelector("#button");

function convertDecToBin(dec) {
    let bin = 0;
    let bits = 0;

    while (dec != 0) {
        console.log(`bin = ${bin} and dec = ${dec}`);
        bin += (dec % 2) * Math.pow(10, bits++);
        dec = Math.floor(dec / 2);
    }

    return bin;
}

form.addEventListener("submit", e => e.preventDefault());

convertButton.addEventListener("click", 
    () => binaryField.value = convertDecToBin(decimalField.value));
