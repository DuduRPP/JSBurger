"use strict";

let body = document.querySelector("body");
let navigation = document.getElementById("navigation");

//Scroll
onScroll();
function onScroll() {
  console.log(scrollY);
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
  let menu_elements = document.querySelectorAll("#navigation a");
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
