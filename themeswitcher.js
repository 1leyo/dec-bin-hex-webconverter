let style = document.getElementById('stylesheet');

function setDarkmode()
{
    style.href = 'main.css'
}

function setLightmode()
{
    style.href = 'main_light.css'
}

function switchTheme()
{
    let darkmode = 'main.css'
    let lightmode = 'main_light.css'
    let path = style.getAttribute('href')

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
            applyTheme('neon_theme.css')
            break;
    }
}

function applyTheme(themeCSS)
{
    style.href = themeCSS
}