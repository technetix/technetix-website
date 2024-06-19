'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

  });

}



/**
 * header sticky functionality
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");

});

/**********************/


/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 800 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

$('.carousel-client').bxSlider({
  auto: true,
    slideWidth: 1200,
    minSlides: 3,
    maxSlides: 12,
    controls: false
});

$('.client-logo').owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav: false,
  autoplay: true,
  navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
  responsive: {
      0: {
          items: 3
      },
      300: {
          items: 3
      },
      600: {
          items: 4
      },
      1000: {
          items: 6
      }
  }
})