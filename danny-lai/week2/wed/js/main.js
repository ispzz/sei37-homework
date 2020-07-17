console.log(`Meow, world!`);

// Create a new Javascript file and link to it with a script tag at the bottom.

// Create a variable to store a reference to the img.
const cat = document.querySelector('#cat');
const bun = document.querySelector('#bun');
const raveCat = document.querySelector('#raveCat')
const godzilla = document.querySelector('#godzilla')

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

cat.style.position = 'relative';
cat.style.left = '0px';

bun.style.position = 'absolute';
bun.style.right = '0px';
bun.style.bottom = '0px';

raveCat.style.position = 'absolute';
raveCat.style.top = '0px';


// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

const catWalk = function(){
  const oldLeft = parseInt(cat.style.left);
  let newLeft = oldLeft + 10;
  cat.style.left = newLeft += 'px';

  if(oldLeft > window.innerWidth){
    cat.style.left = '0px';
  };

};

const bunWalk = function(){
  const oldRight = parseInt(bun.style.right);
  let newRight = oldRight + 10;
  bun.style.right = newRight += 'px';

  if(oldRight > window.innerWidth){
    bun.style.right = '0px'
  };

};

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

setInterval(catWalk, 50);
setInterval(bunWalk, 50);

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.
