const style = document.getElementById("stylesheet");

const option1 = document.getElementById("theme1");
const option2 = document.getElementById("theme2");
const option3 = document.getElementById("theme3");

const themes = ["main.css", "main_light.css", "neon_theme.css"];

function applyTheme(themeCSS) {
  style.href = `stylesheets/${themeCSS}`;
}

option1.addEventListener("click", () => applyTheme(themes[0]));
option2.addEventListener("click", () => applyTheme(themes[1]));
option3.addEventListener("click", () => applyTheme(themes[2]));
