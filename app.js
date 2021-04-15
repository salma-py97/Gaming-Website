const hamburgerMenu = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu-container"); 

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('block');
})