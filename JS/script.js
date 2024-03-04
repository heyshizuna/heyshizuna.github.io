// header //
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// skills //
const skillModals = document.querySelectorAll(".skills-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const skillCloseBtns = document.querySelectorAll(".modal-close-btn");

learnMoreBtns.forEach((learnMoreBtn, i) => {
  learnMoreBtn.addEventListener("click", () => {
    openSkillmodal(i);
  });
});

skillCloseBtns.forEach((skillCloseBtn) => {
  skillCloseBtn.addEventListener("click", () => {
    skillModals.forEach((skillModal) => {
      skillModal.classList.remove("active");
    });
  });
});


function openSkillmodal(skillClick) {
  skillModals[skillClick].classList.add("active");
}

// project //

const bodyFlow = document.querySelector("body");
const projectModals = document.querySelectorAll(".project-modal");
const imgCards = document.querySelectorAll(".img-card");
const projectCloseBtns = document.querySelectorAll(".project-close-btn");

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    openProjectModal(i);
  });
});


projectCloseBtns.forEach((projectCloseBtn) => {
  projectCloseBtn.addEventListener("click", () => {
    projectModals.forEach((projectModalView) => {
      projectModalView.classList.remove("active");
    });
    bodyFlow.style.overflow = "visible";
  });
});

function openProjectModal(modalClick) {
  projectModals[modalClick].classList.add("active");
  bodyFlow.style.overflow = "hidden";
}

// swiper //

var swiper = new Swiper(".certificate-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// change theme //
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

function getCurrentTheme() {
  document.body.classList.contains("dark-theme") ? "dark" : "light";
}
function getCurrentIcon() {
  themeBtn.classList.contains("sun") ? "sun" : "moon";
}

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// scroll to top //
const toTopBtn = document.querySelector(".to-top-btn");

window.addEventListener("scroll", () => {
  toTopBtn.classList.toggle("active", window.scrollY > 500);
});

toTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// navitem active //
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let idName = current.getAttribute("id");
    const sectionID = document.querySelector(
      '.nav-item a[href*="' + idName + '"]'
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionID.classList.add("active");
    } else {
      sectionID.classList.remove("active");
    }
  });
});

// nav menu //
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-item a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

// scrollreveal //
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal(".media-icons i, .contact-info, .contact-list li", {
  delay: 300,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".about .professional-list li, .contact-form p ", {
  delay: 300,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(".hero .info h2, .section-title-01, .section-title-02", {
  delay: 300,
  origin: "left",
});
ScrollReveal().reveal(".hero-img,.about-img", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(
  ".hero .info h3, .hero .info p,.about-info .description, .certificate-swiper,.contact-form-body input,.contact-form-body textarea",
  { delay: 400, origin: "right" }
);
ScrollReveal().reveal(" .footer-container .group", {
  delay: 300,
  origin: "top",
  interval: 200,
});
ScrollReveal().reveal(" .footer-copyright", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(
  ".img-card,.education-info .education, .experience-card,.skills-card",
  {
    delay: 400,
    origin: "bottom",
    interval: 200,
  }
);
ScrollReveal().reveal(
  ".hero .info .btn, .about .about-info .btn,.contact-form-body button",
  { delay: 500, origin: "bottom" }
);
