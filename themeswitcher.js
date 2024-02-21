function setDarkmode()
{
    document.getElementById('stylesheet').href = 'main.css'
}

function setLightmode()
{
    document.getElementById('stylesheet').href = 'main_light.css'
}

function switchTheme()
{
    let darkmode = 'main.css'
    let lightmode = 'main_light.css'
    let path = document.getElementById('stylesheet').getAttribute('href')

    if(path === darkmode)
    {
        document.getElementById('stylesheet').href = 'main_light.css'
    }
    else if(path === lightmode)
    {
        document.getElementById('stylesheet').href = 'main.css'
    }
}