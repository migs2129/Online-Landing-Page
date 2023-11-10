
let menu = document.querySelector("header");
let menuBtn = document.querySelector("header button");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("opened");
});
