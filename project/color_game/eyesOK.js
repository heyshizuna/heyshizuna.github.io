//--- 封面 ---//
let play = document.querySelector(".play");
let cover = document.querySelector(".home");

//--- 遊戲 ---//
let plate = document.querySelector(".plate");
let boxLevel = document.querySelector(".level");
let boxScore = document.querySelector(".score");
let batsu = document.querySelector(".false");
let LV = 1;
let Level = 1;
let score = 0;
let opacity = 0.1;
let timing = 60;
let countDown;
let hintNum = 3;
boxLevel.innerHTML = Level;
boxScore.innerHTML = score;

//--- 暫停/開始/提示 ---//
let pauseBtn = document.querySelector(".pause");
let restartBtn = document.querySelector(".restart");
let endBtn = document.querySelector(".end");
let pausePage = document.querySelector(".pausePage");
let hintBtn = document.querySelector(".hint");

play.addEventListener("click", function () {
  cover.style.display = "none";
  timeInformation();
});

pauseBtn.addEventListener("click", function () {
  pausePage.style.display = "block";
  timeInformation("pause");
});
restartBtn.addEventListener("click", function () {
  pausePage.style.display = "none";
  addBoxes();
  timeInformation();
});
endBtn.addEventListener("click", function () {
  result();
  timeInformation("end");
});
hintBtn.addEventListener("click", function () {
  hint = document.querySelector(".ans");
  hint.classList.add("active");
  setTimeout(function () {
    hint.classList.remove("active");
  }, 2000);
  hintNum -= 1;
  hintBtn.innerHTML = `ヒント(${hintNum})`;
  if (hintNum == 0) {
    hintBtn.style.display = "none";
  }
});

addBoxes();

//--- 點擊答案 ---//
plate.addEventListener("click", function (event) {
  if (event.target.classList.contains("ans")) {
    if (LV < 9) {
      LV++;
    }
    Level++;
    score++;
    boxLevel.innerHTML = Level;
    boxScore.innerHTML = score;
    addBoxes();
  } else {
    timing -= 5;
    batsu.classList.add("active");
    setTimeout(function () {
      batsu.classList.remove("active");
    }, 500);
  }
});

//--- 倒數 ---//
function timeInformation(btn = "nothing") {
  let timer = document.querySelector(".time");
  timer.innerHTML = timing + "s";
  clearInterval(countDown);
  countDown = setInterval(function () {
    if (timing <= 0) {
      result();
      endFunc();
    } else {
      timing -= 1;
    }
    timer.innerHTML = timing + "s";
  }, 1000);

  switch (btn) {
    case "pause":
      clearInterval(countDown);
      break;
    case "end":
      endFunc();
      break;
  }

  function endFunc() {
    timing = 60;
    LV = 1;
    Level = 1;
    score = 0;
    opacity = 0.1;
    boxLevel.innerHTML = Level;
    boxScore.innerHTML = score;
    hintBtn.style.display = "block";
    hintNum = 3;
    hintBtn.innerHTML = `ヒント(${hintNum})`;
    addBoxes();
    clearInterval(countDown);
    cover.style.display = "flex";
  }
}
//--- 色塊 ---//
function addBoxes() {
  plate.innerHTML = "";

  let boxNum = (LV + 1) * (LV + 1);
  let boxWH = (480 - LV * 10) / (LV + 1);
  let ansBox = getRandom(boxNum, 0);
  let r = getRandom(255, 0);
  let g = getRandom(255, 0);
  let b = getRandom(255, 0);

  if (opacity < 1) {
    opacity = opacity + 0.0225;
  }

  plate.style.gridTemplateColumns =
    "repeat(" + (LV + 1) + ", " + (LV + 1) + "fr)";

  for (let i = 0; i < boxNum; i++) {
    if (i == ansBox) {
      plate.innerHTML += `<div class="box ans" style="width:${boxWH}px;height:${boxWH}px;background-color:rgba(${r},${g},${b},${opacity})"></div>`;
    } else {
      plate.innerHTML += `<div class="box" style="width:${boxWH}px;height:${boxWH}px;background-color:rgba(${r},${g},${b})"></div>`;
    }
  }
};
//--- 結算 ---//
function result() {
  if (score <= 10) {
    alert(score + "分而已，作為失敗的典範，你太成功了！");
  } else if (score > 10 && score <= 20) {
    alert("得到" + score + "分，你的眼睛跟臍帶一起被剪掉了嗎？");
  } else if (score > 20 && score <= 30) {
    alert("你得到" + score + "分，只差認不出口紅色號了！");
  } else {
    alert("你得到" + score + "分，看你有點天分，這本如來神掌賣你10塊^_^");
  }
};

//--- 隨機數 ---//
function getRandom(max, min) {
  return Math.floor(Math.random() * max + min);
}
