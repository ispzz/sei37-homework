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

const catDance = function() {
  window.setTimeout(catKeepWaling, 6000);
  window.setTimeout(clearParty, 6000);
}


/* ----------------------------- // Clear Party ----------------------------- */

const clearParty = function() {
  bodyBg.style.background = "#ffffff";
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


catShow = window.setInterval(catWalk, 50);