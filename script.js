"use strict";

// DOM Variables
let body = document.querySelector("body");
let navigation = document.getElementById("navigation");
let backToTopButton = document.querySelector(".backToTopButton");
let reviews = document.getElementById("reviews");
let footer = document.querySelector("footer");

//Scroll
onScroll();
function onScroll() {
  showToTop();
  navbarScroll();
}

function navbarScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

// Expandable Menu
function closeMenu() {
  body.classList.remove("menu-expanded");
  navigation.classList.remove("show");
}

function addEventsOnMenu() {
  let menu_elements = document.querySelectorAll("#navigation .page-links a");
  for (let elem of menu_elements) {
    elem.addEventListener("click", closeMenu);
  }
}

function openMenu() {
  body.classList.add("menu-expanded");
  navigation.classList.add("show");
  addEventsOnMenu();
}

let closeMenuButton = document.querySelector(".closeMenuButton");
let openMenuButton = document.querySelector(".openMenuButton");

// Events
window.addEventListener("scroll", onScroll);
closeMenuButton.addEventListener("click", closeMenu);
openMenuButton.addEventListener("click", openMenu);

//ToTheTop Button
function showToTop() {
  console.log(window.scrollY);
  if (scrollY + innerHeight > innerHeight * 1.75) {
    backToTopButton.classList.add("show");
    if (scrollY + innerHeight > footer.offsetTop) {
      backToTopButton.classList.add("onFooter");
    } else {
      backToTopButton.classList.remove("onFooter");
    }
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* Swiper */
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  mousewheel: true,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* Scroll Reveal */

const scrollReveal = ScrollReveal({
  origin: "left",
  distance: "50px",
  duration: 900,
});

scrollReveal.reveal(
  `
#home header,#home .content,
#reviews header,#reviews .content,
#classics header,#classics .content .card,
#about header,#about .content,
#contact header,#contact .content,
footer`,
  { interval: 50 }
);
