const NavList = document.querySelector(".nav-list");
const navtoggler = document.getElementById("NavToggler");

const  hamburger = document.querySelector(".hamburger")

navtoggler.addEventListener("click", function () {
  NavList.classList.toggle("show")
  document.body.classList.toggle("no-scroll"); // Toggle no-scroll class on body
  hamburger.classList.toggle("hidden")
});

