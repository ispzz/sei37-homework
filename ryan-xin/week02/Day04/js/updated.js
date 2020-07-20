const $blackCat = $('#blackCat');

/* ---------------------------- SET CAT POSITION ---------------------------- */

$blackCat.css('left', '0px');
const halfHeight = (window.innerHeight - 296) / 2;
const verticalCenter = halfHeight + "px";
$blackCat.css('top', verticalCenter);

/* -------------------------------- WALK LTR -------------------------------- */

const walkStep = 10;
const walkDistance = window.innerWidth - 296;
let catWalkStopper;

let newLeft = 0;
const walkLeftToRight = function() {
  newLeft = newLeft + walkStep;
  $blackCat.css('left', newLeft + 'px');
  if (newLeft === Math.floor((walkDistance / walkStep)) * walkStep) {
    window.clearInterval(catWalkStopper);
    $blackCat.css('transform', 'scaleX(-1)');
    catWalkStopper = window.setInterval(walkRightToLeft, 50);
  }
}

/* -------------------------------- WALK RTL -------------------------------- */

const walkRightToLeft = function() {
  newLeft = newLeft - walkStep;
  $blackCat.css('left', newLeft + 'px');
  if (newLeft === 0) {
    window.clearInterval(catWalkStopper);
    $blackCat.css('transform', 'scaleX(1)');
    catWalkStopper = window.setInterval(walkLeftToRight, 50);
  }
}

catWalkStopper = window.setInterval(walkLeftToRight, 50);

/* -------------------------------- CAT CLICK------------------------------- */

$blackCat.click(function(){
  $(this).attr('src', 'https://media.giphy.com/media/xUA7bg7nlAIONYIZu8/giphy.gif');
  $(document.body).css('background', "#000000");
})
  
/* ---------------------------- BACKGROUND COLOR ---------------------------- */

const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');
const block4 = document.querySelector('.block4');
const block5 = document.querySelector('.block5');
const block6 = document.querySelector('.block6');

const block1Show = function() {
  block1.style.visibility = 'visible';
  block1.style.cursor = "pointer";
}
const block2Show = function() {
  block2.style.visibility = 'visible';
  block2.style.cursor = "pointer";
}
const block3Show = function() {
  block3.style.visibility = 'visible';
  block3.style.cursor = "pointer";
}
const block4Show = function() {
  block4.style.visibility = 'visible';
  block4.style.cursor = "pointer";
}
const block5Show = function() {
  block5.style.visibility = 'visible';
  block5.style.cursor = "pointer";
}
const block6Show = function() {
  block6.style.visibility = 'visible';
  block6.style.cursor = "pointer";
}

const changeBgColor = function(){
  window.setTimeout(block6Show, 100);
  window.setTimeout(block5Show, 200);
  window.setTimeout(block4Show, 300);
  window.setTimeout(block3Show, 400);
  window.setTimeout(block2Show, 500);
  window.setTimeout(block1Show, 600);
}

$(window).on('keypress', changeBgColor);

/* ------------------------------ COLOR CHANGER ----------------------------- */
const colorTheme = ["#F90313", "#FC8209", "#FCF901", "#2AFD07", "#08E0FB", "#6D04FD"];


block1.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colorTheme.length);
  block1.style.backgroundColor = colorTheme[randomIndex];
  clearAll();
});
block2.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colorTheme.length);
  block2.style.backgroundColor = colorTheme[randomIndex];
  clearAll();
});
block3.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colorTheme.length);
  block3.style.backgroundColor = colorTheme[randomIndex];
  clearAll();
});
block4.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colorTheme.length);
  block4.style.backgroundColor = colorTheme[randomIndex];
  clearAll();
});
block5.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colorTheme.length);
  block5.style.backgroundColor = colorTheme[randomIndex];
  clearAll();
});
block6.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colorTheme.length);
  block6.style.backgroundColor = colorTheme[randomIndex];
  clearAll();
});

/* -------------------------------- Clear ALL ------------------------------- */


const secretCat = document.querySelector('.secretCat img');

const clearAll = function() {
  if (block1.style.backgroundColor === block2.style.backgroundColor && block1.style.backgroundColor === block3.style.backgroundColor && block1.style.backgroundColor === block4.style.backgroundColor && block1.style.backgroundColor === block5.style.backgroundColor && block1.style.backgroundColor === block6.style.backgroundColor) {
    block1.style.visibility = 'hidden';
    block2.style.visibility = 'hidden';
    block3.style.visibility = 'hidden';
    block4.style.visibility = 'hidden';
    block5.style.visibility = 'hidden';
    block6.style.visibility = 'hidden';
    $blackCat.css('display', 'none');
    secretCat.style.visibility = "visible";
    block1.style.backgroundColor = '#F90313';
    block2.style.backgroundColor = '#FC8209';
    block3.style.backgroundColor = '#FCF901';
    block4.style.backgroundColor = '#2AFD07';
    block5.style.backgroundColor = '#08E0FB';
    block6.style.backgroundColor = '#6D04FD';
  }
}


/* ----------------------------- BLOCK DISAPPEAR --------------------------------- */


block1.addEventListener("dblclick", function () {
  this.style.visibility = 'hidden';
});
block2.addEventListener("dblclick", function () {
  this.style.visibility = 'hidden';
});
block3.addEventListener("dblclick", function () {
  this.style.visibility = 'hidden';
});
block4.addEventListener("dblclick", function () {
  this.style.visibility = 'hidden';
});
block5.addEventListener("dblclick", function () {
  this.style.visibility = 'hidden';
});
block6.addEventListener("dblclick", function () {
  this.style.visibility = 'hidden';
});

