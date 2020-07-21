console.log(`Meow, world!`);

// Create a new Javascript file and link to it with a script tag at the bottom.

// Create a variable to store a reference to the img.
const $cat = $('#cat');
const $bun = $('#bun');
const $raveCat = $('#raveCat')
const $godzilla = $('#godzilla')

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

$cat.css({
  'position': 'relative',
  'left': '0px'
});

$bun.css({
  'position': 'absolute',
  'right': '0px',
  'bottom': '0px'
});

$raveCat.css({
  'position': 'absolute',
  'top': '0',
  'bottom': '500',
  'left': '0',
  'right': '0',
  'margin': 'auto'
});

// $audio.css({
//   'position': 'absolute',
//   'top': '0',
//   'bottom': '500',
//   'left': '0',
//   'right': '0',
//   'margin': 'auto'
// });

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

const catWalk = function(){
  const oldLeft = parseInt($cat.css('left'));
  let newLeft = oldLeft + 10;
  let moveCatRight = newLeft += 'px';
  $cat.css('left', moveCatRight);

  if(oldLeft > window.innerWidth){
    $cat.css('left', '0px');
  };

};

const bunWalk = function(){
  const oldRight = parseInt($bun.css('right'));
  let newRight = oldRight + 10;
  let moveBunLeft = newRight += 'px';
  $bun.css('right', moveBunLeft);

  if(oldRight > window.innerWidth){
    $bun.css('right', '0px');
  };

};

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

setInterval(catWalk, 50);
setInterval(bunWalk, 50);

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.
