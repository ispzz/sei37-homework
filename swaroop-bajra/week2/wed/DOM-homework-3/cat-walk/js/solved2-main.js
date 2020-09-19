const img = document.querySelector('img');
img.style.position = 'relative';
img.style.left = '0px';

let counter = 0;
const moveLeft = 10;
const catWalk = function() {
let moveLeft = 10;
let x = window.innerWidth;
let y = window.innerHeight;

  img.style.left = parseInt(img.style.left) + moveLeft + 'px';

  if (parseInt(img.style.left) <= 0) {
    moveLeft = +10;
     counter++;
    img.style.webkitTransform = 'scaleX(+1)';
  } else if (parseInt(img.style.left) >= x) {
  	img.style.webkitTransform = 'scaleX(-1)';
    moveLeft -= 10;
  }


//FUN BEGIN HERE.
  if (counter === 4){
  	clearInterval(animate);
    img.src = "./Images/at-at_faceplant.gif"
    img.style.webkitTransform = 'scaleX(-1)';
    img.style.zIndex = '1';
    const kitKat = document.createElement("AUDIO");
    kitKat.src = './Audio/KeyboardCat(JumpstyleRemix).mp3';
    kitKat.play();
    setTimeout(FUNPLACE, 3500);
    setTimeout(kickit, 3500);

  }


};

const catWalkBack = function(){

  const oldRight = parseInt(img.style.left);
  const newRight = oldRight - 10;
  img.style.left = newRight + 'px';
  counter++;
  img.style.left = window.innerWidth + 'px';

};

const animate = setInterval(catWalk,20);
