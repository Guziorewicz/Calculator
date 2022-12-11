console.log("connected");

window.onload = init();

function init() {
  console.log("init start");
}

let func = "";

let side = document.querySelector(".side-buffor");
let buff = document.querySelector(".buffor");
let funcMark = document.querySelector(".functionMark");

let b9 = document.querySelector("#b9");
b9.addEventListener("click", () => {
  push(b9);
});
let b8 = document.querySelector("#b8");
b8.addEventListener("click", () => {
  push(b8);
});
let b7 = document.querySelector("#b7");
b7.addEventListener("click", () => {
  push(b7);
});
let b6 = document.querySelector("#b6");
b6.addEventListener("click", () => {
  push(b6);
});
let b5 = document.querySelector("#b5");
b5.addEventListener("click", () => {
  push(b5);
});
let b4 = document.querySelector("#b4");
b4.addEventListener("click", () => {
  push(b4);
});
let b3 = document.querySelector("#b3");
b3.addEventListener("click", () => {
  push(b3);
});
let b2 = document.querySelector("#b2");
b2.addEventListener("click", () => {
  push(b2);
});
let b1 = document.querySelector("#b1");
b1.addEventListener("click", () => {
  push(b1);
});
let b0 = document.querySelector("#b0");
b0.addEventListener("click", () => {
  if (side.innerText == "") {
  } else {
    push(b0);
  }
});

// function pads

let bAC = document.querySelector(".bAC");
bAC.addEventListener("click", () => {
  allClear();
});

let del = document.querySelector(".arrow");
del.addEventListener("click", () => {
  side.innerText = side.innerText.slice(0, -1);
});

let bEqual = document.querySelector("#bEqual");
bEqual.addEventListener("click", () => {
  if (buff.innerText === "0") {
    buff.innerText = side.innerText;

    clearSide();
  } else {
    equal();
    clearSide();
    clearFunc();
  }
});

let bAdd = document.querySelector("#bPlus");
bAdd.addEventListener("click", () => {
  if (buff.innerText == "0" && side.innerText == "") {
    funcMark.innerText = "+";
  } else if (buff.innerText == "0") {
    moveBuff();
    funcMark.innerText = "+";
    clearSide();
  } else if (side.innerText == "") {
    funcMark.innerText = "+";
  } else {
    add();
  }
});

let bSubtract = document.querySelector("#bMinus");
bSubtract.addEventListener("click", () => {
  if (buff.innerText == "0" && side.innerText == "") {
    funcMark.innerText = "-";
  } else if (buff.innerText == "0") {
    moveBuff();
    funcMark.innerText = "-";
    clearSide();
  } else if (side.innerText == "") {
    funcMark.innerText = "-";
  } else {
    subtract();
  }
});

let bMultiply = document.querySelector("#bmulti");
bMultiply.addEventListener("click", () => {
  if (buff.innerText == "0" && side.innerText == "") {
    funcMark.innerText = "*";
  } else if (buff.innerText == "0") {
    moveBuff();
    funcMark.innerText = "*";
    clearSide();
  } else if (side.innerText == "") {
    funcMark.innerText = "*";
  } else {
    multiply();
  }
});

let bShare = document.querySelector("#bShare");
bShare.addEventListener("click", () => {
  if (buff.innerText == "0" && side.innerText == "") {
    funcMark.innerText = "/";
  } else if (buff.innerText == "0") {
    moveBuff();
    funcMark.innerText = "/";
    clearSide();
  } else if (side.innerText == "") {
    funcMark.innerText = "/";
  } else {
    share();
  }
});

let bDot = document.querySelector("#bDot");
bDot.addEventListener("click", () => {
  let buffValue = Number(side.innerText);
  let lastLet = side.innerText.substr(-1);
  if (lastLet == ".") {
    return;
  }
  if (Number.isInteger(buffValue) == true) {
    side.innerText += bDot.innerText;
  }
});

// functions

function allClear() {
  buff.innerText = "0";
  clearSide();
  clearFunc();
}

function clearSide() {
  side.innerText = "";
}

function clearFunc() {
  funcMark.innerText = "";
}

function moveBuff() {
  if (buff.innerText == "0") {
    buff.innerText = side.innerText;
  }
}

function checkFunc() {
  if (funcMark.innerText !== "") {
    return;
  }
}

function cutToTen() {
  if (buff.innerText.length > 10) {
    buff.innerText = "Too big";
  } else {
    clearFunc();
  }
} ///////////////////////////////////////////////// tutaj

function push(e) {
  if (side.innerText.length > 10) {
    return;
  } else {
    side.innerText += e.innerText;
  }
}
function scope() {}

function add() {
  buff.innerText = Number(side.innerText) + Number(buff.innerText);
  cutToTen();
  clearSide();
}
function subtract() {
  buff.innerText = Number(buff.innerText) - Number(side.innerText);
  console.log(buff.innerText);
  cutToTen();
  clearSide();
}

function multiply() {
  buff.innerText = Number(buff.innerText) * Number(side.innerText);
  console.log(buff.innerText);
  cutToTen();
  clearSide();
}

function share() {
  buff.innerText = Number(buff.innerText) / Number(side.innerText);
  cutToTen();
  clearSide();
}

function equal() {
  switch (funcMark.innerText) {
    case "":
      {
        moveBuff();
      }
      break;
    case "+":
      {
        add();
      }
      break;
    case "-":
      {
        subtract();
      }
      break;
    case "*":
      {
        multiply();
      }
      break;
    case "/":
      {
        share();
      }
      break;
    default: {
    }
  }
}
