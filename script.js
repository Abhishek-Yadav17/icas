let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(num) {
    index = (num + slides.length) % slides.length;
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

setInterval(() => showSlide(index + 1), 4000);

const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});