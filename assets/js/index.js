let burger = document.getElementById("burger");
let nav = document.getElementById("nav");
let navLink = document.getElementsByClassName("nav_link");
let body = document.body;
burger.onclick = function() {
    nav.classList.toggle("active");
    body.classList.toggle("overflow");
  };

for (let i = 0; i < navLink.length; i++) {
  navLink[i].onclick = function() {
    body.classList.remove("overflow")
    nav.classList.remove("active");
  }
}