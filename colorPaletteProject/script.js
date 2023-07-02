"use strict";

let colorEl = document.querySelectorAll(".color");

for (let i = 0; i < colorEl.length; i++) {
  colorEl[i].addEventListener("mouseover", (e) => {
    e.target.classList.add("active");
  });

  colorEl[i].addEventListener("mouseleave", (e) => {
    e.target.classList.remove("active");
  });
}
