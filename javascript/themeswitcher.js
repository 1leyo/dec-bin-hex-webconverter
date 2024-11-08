const style = document.getElementById("stylesheet");
const themeButtons = document.querySelectorAll(".dropdown-content a");
const themes = ["main.css", "main_light.css", "neon_theme.css"];

// Aktuelles Theme aus dem Local Storage laden
const savedTheme = localStorage.getItem("selectedTheme");
if (savedTheme) {
  console.log("Loaded Theme from Local Storage");
  applyTheme(savedTheme);
}

themeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedTheme = themes[index];
    applyTheme(selectedTheme);
    localStorage.setItem("selectedTheme", selectedTheme);
  });
});

function applyTheme(themeCSS) {
  style.href = `stylesheets/${themeCSS}`;
}