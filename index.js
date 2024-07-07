const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-links")


openMenu.addEventListener("click", () => {
    openMenu.classList.add("hidden");
    closeMenu.classList.add("active");
    navLinks.classList.add("active");
}) 

closeMenu.addEventListener("click", () => {
    openMenu.classList.remove("hidden");
    closeMenu.classList.remove("active");
    navLinks.classList.remove("active");
}) 