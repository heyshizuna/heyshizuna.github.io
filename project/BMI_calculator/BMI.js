let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let calcBtn = document.querySelector(".calc");
let reset = document.querySelector(".reset");
let result = document.querySelector(".result");

calcBtn.addEventListener("click", function () {
  let m = Number(height.value) / 100;
  let kg = Number(weight.value);

  if (isNaN(m) || isNaN(kg)) {
    alert("格式錯誤！請輸入數字！");
    clean();
  } else if (height.value.trim() == '' || weight.value.trim() == '') {
    alert('請勿空白！');
    clean();
  } else if ( Math.sign(height.value)== -1 || Math.sign(weight.value)== -1) {
    alert('格式錯誤！數值不得為負數！');
    clean();}
  else {
    BMI(m, kg);
  }
});

reset.addEventListener("click", function () {
  height.value = "";
  weight.value = "";
  result.innerHTML = "";
  remove();
});

function BMI(m, kg) {
  let final = Number((kg / (m * m)).toFixed(1));
  remove();
  result.innerHTML = (kg / (m * m)).toFixed(1);
  result.classList.add("active");
  if (final <= 18.5) {
    document.querySelector(".l1").classList.add("active");
  } else if (final > 18.5 && final <= 24) {
    document.querySelector(".l2").classList.add("active");
  } else if (final > 24.1 && final <= 27) {
    document.querySelector(".l3").classList.add("active");
  } else if (final > 27.1 && final <= 30) {
    document.querySelector(".l4").classList.add("active");
  } else if (final > 30.1 && final <= 35) {
    document.querySelector(".l5").classList.add("active");
  } else {
    document.querySelector(".l6").classList.add("active");
  }
}

function clean() {
  height.value = "";
  weight.value = "";
}

function remove() {
  document.querySelector(".l1").classList.remove("active");
  document.querySelector(".l2").classList.remove("active");
  document.querySelector(".l3").classList.remove("active");
  document.querySelector(".l4").classList.remove("active");
  document.querySelector(".l5").classList.remove("active");
  document.querySelector(".l6").classList.remove("active");
  result.classList.remove("active");
}
