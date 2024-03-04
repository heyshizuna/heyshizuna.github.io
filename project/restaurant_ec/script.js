window.addEventListener("load", () => {
  let navList = document.querySelectorAll(".nav-btn");
  navList.forEach((nav) =>
    nav.addEventListener("click", function (e) {
      e.preventDefault();
      navList.forEach(function (el) {
        el.classList.remove("active");
      });
      this.classList.add("active");
    })
  );
});

var swiper = new Swiper(".cardSwiper", {
  speed: 400,
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const selectHeader = document.querySelector("#header");
const backToTop = document.querySelector(".back-to-top");
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  };
  window.addEventListener("load", headerScrolled);
  document.addEventListener("scroll", headerScrolled);
}

window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
