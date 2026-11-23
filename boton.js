const htmlElement = document.documentElement;
const themeBtn = document.getElementById("themebtn");
const setTheme = (theme) => {
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    {
    setTheme("dark");
}else {
    setTheme("light");
}

themeBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");    
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
});
