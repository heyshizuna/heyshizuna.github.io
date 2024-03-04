(function () {
    "use strict";
  const imgAry = [
    {
      src: "./Image/photo/activity/wedding-01.jpg",
      type: "婚禮佈置",
    },
    {
      src: "./Image/photo/activity/wedding-02.jpg",
      type: "婚禮佈置",
    },
    {
      src: "./Image/photo/activity/wedding-03.jpg",
      type: "婚禮佈置",
    },
    {
      src: "./Image/photo/activity/wedding-04.jpg",
      type: "婚禮佈置",
    },
    {
      src: "./Image/photo/activity/wedding-05.jpg",
      type: "婚禮佈置",
    },
    {
      src: "./Image/photo/activity/wedding-06.jpg",
      type: "婚禮佈置",
    },
    {
      src: "./Image/photo/activity/business-01.jpg",
      type: "公商活動",
    },
    {
      src: "./Image/photo/activity/business-02.jpg",
      type: "公商活動",
    },
    {
      src: "./Image/photo/activity/business-03.jpg",
      type: "公商活動",
    },
    {
      src: "./Image/photo/activity/business-04.jpg",
      type: "公商活動",
    },
    {
      src: "./Image/photo/activity/business-05.jpg",
      type: "公商活動",
    },
    {
      src: "./Image/photo/activity/business-06.jpg",
      type: "公商活動",
    },
    {
      src: "./Image/photo/activity/school-01.jpg",
      type: "校園活動",
    },
    {
      src: "./Image/photo/activity/school-02.jpg",
      type: "校園活動",
    },
    {
      src: "./Image/photo/activity/school-03.jpg",
      type: "校園活動",
    },
    {
      src: "./Image/photo/activity/school-04.jpg",
      type: "校園活動",
    },
    {
      src: "./Image/photo/activity/school-05.jpg",
      type: "校園活動",
    },
    {
      src: "./Image/photo/activity/school-06.jpg",
      type: "校園活動",
    },
  ];
  let grid = $(".area");
  grid.masonry({
    itemSelector: ".photo",
    percentPosition: true,
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
  });
  console.log(grid);

  function initArea() {
    let photos = document.querySelectorAll(".photo");
    for (let i = 0; i < photos.length; i++) {
      grid.masonry("remove", photos[i]);
    }
  }

  function setPhoto(type) {
    let ary = [];
    type === "所有活動"
      ? (ary = imgAry)
      : (ary = imgAry.filter((img) => img.type === type));

    for (let i = 0; i < ary.length; i++) {
      let photo = document.createElement("div");
      let img = document.createElement("img");
      let txt = document.createElement("p");
      photo.classList.add("photo");
      img.src = ary[i].src;
      txt.textContent = ary[i].type.toUpperCase();
      $(photo).append(img);
      $(photo).append(txt);
      $(".area").append(photo);
      grid.masonry("appended", photo);
    }
    grid.imagesLoaded().progress(function () {
      grid.masonry();
    });
  }
  function changeTagStatus() {
    $(this).hasClass("open")
      ? $(this).removeClass("open")
      : $(this).addClass("open");
  }
  function clickTag() {
    if (!$(this).hasClass("active")) {
      $(".tag").removeClass("active");
      $(this).addClass("active");
      initArea();
      setPhoto(this.textContent);
    }
  }

  function init() {
    initArea();
    setPhoto("所有活動");
  }

  $(".tag").on("click", clickTag);
  $(".tags").on("click", changeTagStatus);

  init();
})();
