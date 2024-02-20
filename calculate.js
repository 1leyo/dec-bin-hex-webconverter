function calculate()
{
    
    if(document.getElementById('dec').value == 0 && document.getElementById('hex').value == 0 && document.getElementById('bin').value == 0)
    {
        clearInputs()
    }
    else if(document.getElementById('dec').value == 0 && document.getElementById('hex').value == 0)
    {
        calcWhenBinInput()
    }
    else if(document.getElementById('bin').value == 0 && document.getElementById('hex').value == 0)
    {
        calcWhenDecInput()
    }
    else if(document.getElementById('bin').value == 0 && document.getElementById('dec').value == 0)
    {
        calcWhenHexInput()
    }
   
}

function calcWhenBinInput()
{
    let input = document.getElementById('bin').value
    let dec = parseInt(input, 2)
    let hex = parseInt(input, 2).toString(16).toUpperCase();

    document.getElementById('dec').value = dec
    document.getElementById('hex').value = hex
}

function calcWhenDecInput()
{
    let input = document.getElementById('dec').value
    let bin = parseInt(input, 10).toString(2)
    let hex = parseInt(input, 10).toString(16).toUpperCase()

    document.getElementById('bin').value = bin
    document.getElementById('hex').value = hex
}

function calcWhenHexInput()
{
    let input = document.getElementById('hex').value
    let dec = parseInt(input, 16)
    let bin = parseInt(dec, 10).toString(2)

    document.getElementById('dec').value = dec
    document.getElementById('bin').value = bin 
}

function clearInputs()
{
    document.getElementById('dec').value = ''
    document.getElementById('bin').value = ''
    document.getElementById('hex').value = ''
}
