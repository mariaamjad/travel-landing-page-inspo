const menu = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});