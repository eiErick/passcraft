const html = document.documentElement;
const reloadImg = document.querySelector(".reload-img");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) html.classList.toggle('dark');
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    reloadImg.setAttribute("src", "./img/reload-dark.svg");
    html.classList.toggle('light');
} 
