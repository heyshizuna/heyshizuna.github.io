const play = document.querySelector(".play");
const closeV = document.querySelector(".close");
const trailer = document.querySelector(".trailer");

play.onclick = () => {
  trailer.classList.add("active");
};
closeV.onclick = () => {
  trailer.classList.remove("active");
};

function changeBg(Bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");
  banner.style.background = `url("img/${Bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}
