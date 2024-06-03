const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links")


openMenu.addEventListener("click", () => {
    console.log('menu clicked');
    openMenu.classList.add("hidden");
    closeMenu.classList.add("active");
    navLinks.classList.add("active");
}) 

closeMenu.addEventListener("click", () => {
    console.log('menu clicked');
    openMenu.classList.remove("hidden");
    closeMenu.classList.remove("active");
    navLinks.classList.remove("active");
}) 