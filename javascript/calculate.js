const inputDec = document.getElementById("dec");
const inputBin = document.getElementById("bin");
const inputHex = document.getElementById("hex");

const btnCalculate = document.getElementById("btn-calc");
const btnClear = document.getElementById("btn-clear");

function calculate() {
  if (inputDec.value === 0 && inputHex.value === 0 && inputBin.value === 0) {
    clearInputs();
  } else if (inputDec.value === 0 && inputHex.value === 0) {
    calcWhenBinInput();
  } else if (inputBin.value === 0 && inputHex.value === 0) {
    calcWhenDecInput();
  } else if (inputBin.value === 0 && inputDec.value === 0) {
    calcWhenHexInput();
  } else {
    calcWhenDecInput();
  }
}

function calcWhenBinInput() {
  const input = inputBin.value;
  const dec = parseInt(input, 2);
  const hex = parseInt(input, 2).toString(16).toUpperCase();

  inputDec.value = dec;
  setHexValue(hex);
}

function calcWhenDecInput() {
  const input = inputDec.value;
  const bin = parseInt(input, 10).toString(2);
  const hex = parseInt(input, 10).toString(16).toUpperCase();

  inputBin.value = bin;
  setHexValue(hex);
}

function calcWhenHexInput() {
  const input = document.getElementById("hex").value;
  const dec = parseInt(input, 16);
  const bin = parseInt(dec, 10).toString(2);

  inputDec.value = dec;
  inputBin.value = bin;
}

function clearInputs() {
  inputDec.value = "";
  inputBin.value = "";
  inputHex.value = "";
}

function setHexValue(hex) {
  if (!(hex === "NAN")) {
    inputHex.value = hex;
  } else {
    inputHex.value = "";
  }
}

function filterHex(event) {
  const key = event.key;
  const validCharacters = "abcdefABCDEF0123456789";
  const isNotBackspace = keyIsNotBackSpace(key);
  if (!validCharacters.includes(key) && isNotBackspace) {
    event.preventDefault();
  }
}

function filterBin(event) {
  const key = event.key;
  const validCharacters = "10";
  const isNotBackspace = keyIsNotBackSpace(key);
  if (!validCharacters.includes(key) && isNotBackspace) {
    event.preventDefault();
  }
}

function filterDec(event) {
  const key = event.key;
  const validCharacters = "0123456789";
  const isNotBackspace = keyIsNotBackSpace(key);
  if (!validCharacters.includes(key) && isNotBackspace) {
    event.preventDefault();
  }
}

function keyIsNotBackSpace(key) {
  const result = key === "Backspace";

  return !result;
}

inputDec.addEventListener("input", (event) => {
  filterDec(event);
  calcWhenDecInput();
});

inputBin.addEventListener("input", (event) => {
  filterBin(event);
  calcWhenBinInput();
});

inputHex.addEventListener("input", (event) => {
  filterHex(event);
  calcWhenHexInput();
});

btnCalculate.addEventListener("click", () => calculate())
btnClear.addEventListener("click", () => clearInputs())