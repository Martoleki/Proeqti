const menu = document.querySelector("#bar");
const close = document.querySelector("#close");
const nav = document.querySelector("#navbar");
const MainImg = document.querySelector("#MainImg");
const smallimg = document.querySelectorAll(".small-img");
const logo = document.querySelector(".logo");
const exploreButton = document.querySelector(".explore-btn");
const exploreButton1 = document.querySelector("#explore1-btn");

if (menu) {
  menu.addEventListener("click", function () {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

smallimg.forEach((img) => {
  img.addEventListener("click", function () {
    MainImg.src = img.src;
  });
});

logo.addEventListener("click", function () {
  window.location.href = "index.html";
});

exploreButton.addEventListener(
  "click",
  () => (window.location.href = "shop.html")
);

exploreButton1.addEventListener(
  "click",
  () => (window.location.href = "shop.html")
);
