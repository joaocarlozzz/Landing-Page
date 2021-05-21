const list = document.querySelector(".list");
const navLinks = document.querySelector(".nav-links");

list.addEventListener("click", function() {
    navLinks.classList.toggle("open");
})