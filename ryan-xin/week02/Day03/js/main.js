const cat = document.querySelector("img");

cat.style.position = "absolute";
cat.style.left = "0px";
cat.style.top = "0px";

let catShow;
let newLeft = 0;

const walkDistance = window.innerWidth - cat.width;

/* ------------------------------ Walk Forward ------------------------------ */

const catWalk = function() {
  newLeft = newLeft + 10;
  cat.style.left = newLeft + "px";
  if (newLeft === Math.floor(((walkDistance / 2) / 10)) * 10 ) { // half distance needs to be multiple times of 10;
    window.clearInterval(catShow);
    catDance();
  }
  if (newLeft > walkDistance) {
    window.clearInterval(catShow);
    cat.style.transform = "scaleX(-1)"; 
    catShow = window.setInterval(catBack, 20);
  }
}

/* -------------------------------- Walk Back ------------------------------- */

const catBack = function() {
  newLeft = newLeft - 10;
  cat.style.left = newLeft + "px";
  if (newLeft === 0) {
    window.clearInterval(catShow);
    cat.style.transform = "scaleX(+1)";
    catShow = window.setInterval(catWalk, 50);
  }
}

/* -------------------------------- Cat Party ------------------------------- */

let greCatShow;
let flyCatTimer;
const catDance = function() {
  cat.src = "https://media.giphy.com/media/L2GmwARts46dC6f7NR/giphy.gif";
  birthdayMessage();
  backgroundChanger();
  greyCatDance();
  flyCatTimer = window.setInterval(flyCatFly, 20);
  window.setTimeout(greyCatDance1, 1600);
  window.setTimeout(greyCatDance2, 3000);
  window.setTimeout(greyCatDance3, 4500);
  window.setTimeout(leftCatDance, 500);
  window.setTimeout(rightCatDance, 800);
  window.setTimeout(catKeepWaling, 6000);
  window.setTimeout(clearParty, 6000);
}

/* ------------------------- Change Background Color ------------------------ */

const bodyBg = document.querySelector("body");
const backgroundChanger = function() {
  bodyBg.style.background = "#000000";
}

/* ------------------------- Happy Birthday Message ------------------------- */

const happyBirthday = document.querySelector(".happyBirthday");
const birthdayMessage = function() {
  happyBirthday.style.visibility = "visible";
}

/* -------------------------------- Left Cat -------------------------------- */

let leftCatBottom = 0;
const leftCat = document.querySelector(".catLeft");
const leftCatDance = function() {
  leftCat.style.bottom = "200px";
}

/* -------------------------------- Right Cat ------------------------------- */

let rightCatBottom = 0;
const rightCat = document.querySelector(".catRight");
const rightCatDance = function() {
  rightCat.style.bottom = "0px";
}

/* -------------------------------- Grey Cat -------------------------------- */

let greyCatRight = 0;
const greyCat = document.querySelector(".greyCat");
const greyCatDance = function() {
  greyCat.style.visibility = "visible";
}
const greyCatDance1 = function() {
  greyCat.style.right = "1200px";
  greyCat.style.top = "200px";
}
const greyCatDance2 = function () {
  greyCat.style.right = "500px";
  greyCat.style.top = "10px";
}
const greyCatDance3 = function () {
  greyCat.style.right = "200px";
  greyCat.style.top = "300px";
}

/* --------------------------------- FLy Cat -------------------------------- */

const flyCat = document.querySelector(".flyCat");
let flyCatNewLeft = 0;
flyCat.style.left = "0px";
const flyCatFly = function () {
  flyCat.style.visibility = "visible";
  flyCatNewLeft = flyCatNewLeft + 10;
  flyCat.style.left = flyCatNewLeft + "px";
  if (flyCatNewLeft === (Math.floor(window.innerWidth / 10)) * 10) {
    flyCatNewLeft = 0;
  }
}

/* ----------------------------- // Clear Party ----------------------------- */

const clearParty = function() {
  bodyBg.style.background = "#ffffff";
  cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  leftCat.style.bottom = "-500px";
  rightCat.style.bottom = "-500px";
  happyBirthday.style.visibility = "hidden";
  greyCat.style.visibility = "hidden";
  flyCat.style.visibility = "hidden";
  flyCat.style.left = "0px";
  window.clearInterval(flyCatTimer);
}

/* ------------------------------ Keep Walking ------------------------------ */

const catKeepWaling = function () {
  catShow = window.setInterval(catWalk, 50);
}

/* -------------------------------------------------------------------------- */
/*                                Let's Start!                                */
/* -------------------------------------------------------------------------- */

catShow = window.setInterval(catWalk, 50);