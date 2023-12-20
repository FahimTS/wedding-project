/*===================Menu Bar==================*/
const hamburger = document.querySelector(".menu_bars");
const navMenu = document.querySelector(".menu_con_main");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav_link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));
