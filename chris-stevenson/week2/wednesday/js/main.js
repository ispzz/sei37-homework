//----------------------------- CAT WALK ANIMATION -----------------------------

//Declate that the wakling cat is walkingCat
const walkingCat = document.getElementById('walkingCat');
//set left edge value to 0 of walking cat image
walkingCat.style.left = 0;
//set variable for how much the cat should move
let pixelsMoved = 2;
let moveFromLeftEdge = 0
//path the cat can travel is the window width minus the width of the cat gif
const windowWidth = window.innerWidth-296;
let halfway = Math.ceil(((window.innerWidth/2)-(walkingCat.width/2))/pixelsMoved)*pixelsMoved;
//path the cat can travel is the window width minus the width of the cat gif
let catDestination = window.innerWidth-296;


const catWalk = function() {
  if(parseInt(walkingCat.style.left) === halfway) {
    catDance();
  }
  if(parseInt(walkingCat.style.left) <= catDestination) {
    catDestination = window.innerWidth-296;
    walkingCat.style.transform = "scaleX(1)";
    moveFromLeftEdge += pixelsMoved;
    walkingCat.style.left = moveFromLeftEdge + 'px';
  } else {
    catDestination = 0;
    walkingCat.style.transform = "scaleX(-1)";
    moveFromLeftEdge -= pixelsMoved;
    walkingCat.style.left = moveFromLeftEdge + 'px';
  }
}

const catDance = function() {
  clearInterval(catWalkAnimation);
  walkingCat.src = 'images/cats/danceCat.gif'
  setTimeout(keepMoving, 2000);
}

const keepMoving = function() {
  walkingCat.src = 'images/cats/cat-walk.gif'
  catWalkAnimation = setInterval(catWalk, 8);
  if(parseInt(walkingCat.style.left) < catDestination) {
    moveFromLeftEdge += pixelsMoved;
  } else {
    moveFromLeftEdge -= pixelsMoved;
  }
  walkingCat.style.left = moveFromLeftEdge + 'px';
}

let catWalkAnimation = setInterval(catWalk, 8);


// ----------------------------- Grid Color Changer -----------------------------


function changeGridColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    let randomGridNumber = Math.floor(Math.random() * 64);
    let gridElement = document.querySelectorAll('.grid-item');
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
   gridElement[randomGridNumber].style.backgroundColor = ('color',color);
};


// ----------------------------- Spawn Explosions -----------------------------

const explosionObject = {
  '1': ['images/explosions/explo1.gif', 1920],
  '2': ['images/explosions/explo2.gif', 1000],
  '3': ['images/explosions/explo3.gif', 1220],
  '4': ['images/explosions/explo4.gif', 1700]
}

function spawnRandomExplosion() {
  let randomGridNumber = Math.floor(Math.random() * 64);
  let gridElement = document.querySelectorAll('.grid-item');
  const explosionImage = document.createElement('img');
  const getRandomExplosion = Math.ceil(Math.random() * 4);
  const getRandomSize = Math.floor(Math.random() * 100) + 100;
  explosionImage.src = explosionObject[getRandomExplosion.toString()][0];
  explosionImage.setAttribute('class', 'explosionGif');
  // explosionImage.style.width = getRandomSize + '%';
  // explosionImage.style.height = getRandomSize + '%';
  gridElement[randomGridNumber].appendChild(explosionImage);
  const removeExplosion = function() {
    gridElement[randomGridNumber].removeChild(explosionImage);
  }
  setTimeout(removeExplosion, explosionObject[getRandomExplosion.toString()][1]);
};



// ----------------------------- Sans Convo -----------------------------
const sansConvo = function() {
  const sansGif = document.createElement('img');
  sansGif.src = 'images/Sans.gif';
  sansGif.setAttribute('id', 'sansDancing');
  sansGif.classList.add('sans');
  document.querySelector('body').appendChild(sansGif);
  const sansText = document.createElement('div');
  sansText.setAttribute('id', 'sansTextBox');
  sansText.classList.add('sansText');
  document.querySelector('body').appendChild(sansText);
  typeItOut(sansMessages['1']);
  const messageOneDuration = (sansMessages['1'].length * 40) + 3000;
  function removeElement(elementId) {
      const element1 = document.getElementById('sansDancing');
      element1.parentNode.removeChild(element1);
      const element2 = document.getElementById('sansTextBox');
      element2.parentNode.removeChild(element2);
  }
  setTimeout(removeElement, 30000);
};

const sansMessages = {
  '1': 'I see you have decided to select my turbo mode.',
  '2': `I hope you know what you're in for.                                                               `,
  '3': `I guess... I'll have to show you what I stayed up all night making. It was more fun than I thought but I don't know if this is something I can be 'proud' of.`
}

const typeItOut = function(message) {
  let inputMessage = message;
  let i=0;
  let delay = 3000;
  let textBox = document.getElementById("sansTextBox").innerHTML;
  function typeWriter() {
    function clearTextBox() {
      document.getElementById("sansTextBox").innerHTML = '';
      i = 0;
      typeWriter();
      // typeWriter();
    }
    if (i < inputMessage.length) {
      document.getElementById("sansTextBox").innerHTML += inputMessage.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }

    if(document.getElementById("sansTextBox").innerHTML === sansMessages['1']) {
      inputMessage = sansMessages['2'];
      delay = 3000;
      console.log(sansMessages['2']);
    }
    if(document.getElementById("sansTextBox").innerHTML === sansMessages['2']) {
      clearTextBox();
      inputMessage = sansMessages['3'];
      delay = 50000;
    }
    if (i >= inputMessage.length) {
      setTimeout(clearTextBox, delay);
    }
  }
  typeWriter();
}



// ----------------------------- Fade out and hide Element -----------------------------
const fadeAndHide = function(element) {
  element.classList.add('fadeout');
  const setDisplayHidden = function(element) {
    element.style.display = 'none';
  }
  element.addEventListener("webkitTransitionEnd", setDisplayHidden(element));
}

// ----------------------------- unhide and show -----------------------------
const unhideAndShow = function(element) {
  element.classList.remove("fadeout");
  element.style.display = 'initial';
  console.log('triggered');
}

// ----------------------------- Go Turbo Function -----------------------------

const goTurbo = function() {
  pixelsMoved = halfway / 30;
  let randomExplosionAnimation = setInterval(spawnRandomExplosion, 300);
  let gridColorChangeAnimation = setInterval(changeGridColor, 7);
  let myFlyingImagesBeUnleashed = setInterval(flyingImageFunction, 200);
};

// ----------------------------- Flying pics -----------------------------
//
const flyingImageList = {
  '1': ['images/scream1.webp'],
  '2': ['images/scream2.gif'],
  '3': ['images/scream3.gif'],
  '4': ['images/scream4.gif'],
  '5': ['images/scream5.gif'],
  '6': ['images/scream6.gif']
}


const getRandomDisplaceX = Math.ceil(Math.random() * 4) + 2;
const getRandomDisplaceY = Math.ceil(Math.random() * 4) + 2;

let moveImageLeft = 0;
let moveImageUp = 0;

let pixelsMovedX = getRandomDisplaceX;
let pixelsMovedY = getRandomDisplaceY;

const halfwayWide = Math.ceil(window.innerWidth/2);
const halfwayHigh = Math.ceil(window.innerHeight/2);
const flyingImageFunction = function() {
  const getRandomDisplaceX = Math.ceil(Math.random() * 2) + 2;
  const getRandomDisplaceY = Math.ceil(Math.random() * 2) + 2;
  const getRandomX = Math.floor(Math.random() * window.innerWidth) - 300;
  const getRandomY = Math.floor(Math.random() * window.innerHeight) - 300;
  const flyingImage = document.createElement('img');
  const getRandomImage = Math.floor(Math.random() * 6) + 1;
  flyingImage.src = flyingImageList[getRandomImage];
  flyingImage.style.display = 'inline';
  flyingImage.classList.add('rotate');
  flyingImage.style.top = getRandomY + 'px';
  flyingImage.style.left = getRandomX + 'px';
  console.log(flyingImage.style.left);
  document.getElementById('body').appendChild(flyingImage);

  const removeFlyingImage = function() {
    document.getElementById('body').removeChild(flyingImage);
  }
  setTimeout(removeFlyingImage, 1500);
}

// ----------------------------- Start throwing gifs -----------------------------


// ----------------------------- GO TURBO Button -----------------------------


document.querySelector('#goTurbo').addEventListener('click', function() {
  document.querySelector('.grid-container').style.backgroundColor = 'black';
  let goTurboSong = document.getElementById('turboSong');
  goTurboSong.play();
  fadeAndHide(walkingCat);
  fadeAndHide(document.getElementById('goTurbo'));
  setTimeout(sansConvo, 1100);
  setTimeout(goTurbo, 35000);
  setTimeout(unhideAndShow, 38000, walkingCat);

});
