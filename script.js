// class active

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// klik diluar sidebar untukmenghilangkan navbar
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sh = document.querySelector("#shop");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sh.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  e.preventDefault();
};

// ketika klik diluar tombol search

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shop").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
