function calculate() {
    let inputDec = document.getElementById('dec')
    let inputBin = document.getElementById('bin')
    let inputHex = document.getElementById('hex')

    if(inputDec.value == 0 && inputHex.value == 0 && inputBin.value == 0) {
        clearInputs()
    } else if(inputDec.value == 0 && inputHex.value == 0) {
        calcWhenBinInput()
    } else if(inputBin.value == 0 && inputHex.value == 0) {
        calcWhenDecInput()
    } else if(inputBin.value == 0 && inputDec.value == 0) {
        calcWhenHexInput()
    } else {
        calcWhenDecInput()
    }
}

function calcWhenBinInput() {
    let input = document.getElementById('bin').value
    let dec = parseInt(input, 2)
    let hex = parseInt(input, 2).toString(16).toUpperCase()

    document.getElementById('dec').value = dec
    setHexValue(hex)
}

function calcWhenDecInput() {
    let input = document.getElementById('dec').value
    let bin = parseInt(input, 10).toString(2)
    let hex = parseInt(input, 10).toString(16).toUpperCase()

    document.getElementById('bin').value = bin
    setHexValue(hex)
}

function calcWhenHexInput() {
    let input = document.getElementById('hex').value
    let dec = parseInt(input, 16)
    let bin = parseInt(dec, 10).toString(2)

    document.getElementById('dec').value = dec
    document.getElementById('bin').value = bin
}

function clearInputs() {
    document.getElementById('dec').value = ''
    document.getElementById('bin').value = ''
    document.getElementById('hex').value = ''
}

function setHexValue(hex) {
    if(!(hex === "NAN")) {
        document.getElementById('hex').value = hex
    } else {
        document.getElementById('hex').value = ''
    }
}

function filterHex(event) {
    const key = event.key
    const validCharacters = "abcdefABCDEF0123456789"
    if(!validCharacters.includes(key)) {
        event.preventDefault()
    }
}

function filterBin(event) {
    const key = event.key
    const validCharacters = "10"
    if(!validCharacters.includes(key)) {
        event.preventDefault()
    }
}

function filterDec(event) {
    const key = event.key
    const validCharacters = "0123456789"
    if(!validCharacters.includes(key)) {
        event.preventDefault()
    }
}