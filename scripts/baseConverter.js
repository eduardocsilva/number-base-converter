const form = document.querySelector("#conversion");
const fromBase = document.querySelector("#fromBase");
const toBase = document.querySelector("#toBase");
const fromField = document.querySelector("#fromField");
const toField = document.querySelector("#toField");

const conversions = {};
conversions.BinToBin = bin => parseInt(bin, 2).toString(2);
conversions.BinToDec = bin => parseInt(bin, 2).toString(10);
conversions.BinToHex = bin => parseInt(bin, 2).toString(16).toUpperCase();
conversions.DecToBin = dec => parseInt(dec, 10).toString(2);
conversions.DecToDec = dec => parseInt(dec, 10).toString(10);
conversions.DecToHex = dec => parseInt(dec, 10).toString(16).toUpperCase();
conversions.HexToBin = hex => parseInt(hex, 16).toString(2);
conversions.HexToDec = hex => parseInt(hex, 16).toString(10);
conversions.HexToHex = hex => parseInt(hex, 16).toString(16).toUpperCase();

function convert() {
    let conversion = fromBase.value + "To" + toBase.value;
    toField.value = conversions[conversion](fromField.value);
}

form.addEventListener("submit", e => e.preventDefault());

fromBase.addEventListener("change", () => fromField.value = toField.value = "");

toBase.addEventListener("change", () => convert());

fromField.addEventListener("input", () => {
    if (!fromField.value) toField.value = "";
    else convert();
});