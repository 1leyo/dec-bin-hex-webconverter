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
        setLightmode()
    }
    else if(path === lightmode)
    {
        setDarkmode()
    }
}

function setTheme(themeIndex)
{
    let index = themeIndex

    switch(index)
    {
        case 1:
            applyTheme('main.css')
            break;
        case 2:
            applyTheme('main_light.css')
            break;
        case 3:
            console.log("wip")
            break;
    }
}

function applyTheme(themeCSS)
{
    document.getElementById('stylesheet').href = themeCSS
}