// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    991: {
      //当屏幕宽度大于等于320
      slidesPerView: 3,
      spaceBetween: 20,
    },
    570: {
      //当屏幕宽度大于等于320
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      //当屏幕宽度大于等于320
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});


// GoTop //
let goTop = document.querySelector(".goTop");

goTopActive();
window.addEventListener("scroll", goTopActive);

function goTopActive() {
  goTop.classList[window.scrollY >= 100 ? "add" : "remove"]("active");
}
// AOS.js 動畫
AOS.init();

// NavMenu //
let menuBtn = document.querySelector('.nav-menu');
let openBtn = document.querySelector('.bx-menu');
let closeBtn = document.querySelector('.bx-x');
let menuList = document.querySelector('.menu-list');

if (openBtn && closeBtn) {
  openBtn.addEventListener('click', () => {
    openBtn.style.display = ('none');
    closeBtn.style.display = ('block');
    menuList.classList.add('active');
  });
  closeBtn.addEventListener('click', () => {
    openBtn.style.display = ('block');
    closeBtn.style.display = ('none');
    menuList.classList.remove('active');
  });
}
menuList.style.height = `${window.innerHeight - 70}px`;
window.addEventListener('resize', () => {
  menuList.style.height = `${window.innerHeight - 70}px`;
})

// Lax.js 動畫
window.onload = function () {
  lax.init();
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  lax.addElements(".about-imgL", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, "250", "500"],
      ],
    },
  });
};
