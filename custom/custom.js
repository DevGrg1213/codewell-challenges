const hamburger = document.querySelector(".hamburger");
const background = document.querySelector(".background");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("open");
  background.classList.toggle("open");
  logo.classList.toggle("open");
});
