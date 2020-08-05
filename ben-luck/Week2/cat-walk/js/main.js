// Create a variable to store a reference to the img.
//

const cat = document.getElementsByTagName('img')[0];

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.


cat.style.position = 'absolute';
cat.style.marginLeft = 0;
cat.style.marginTop = window.innerHeight/3.5 + 'px';

console.log("Cat is walking.");
console.log(window.innerWidth);



// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

const catWalk = function() {
  let oldLeft = parseInt(cat.style.marginLeft); //gets margin left
  let newLeft = oldLeft + 5; //increments margin left
  cat.style.marginLeft = newLeft + 'px';
}
// setInterval(catWalk, 50);





// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
const catWalk2 = function() {
  let oldLeft = parseInt(cat.style.marginLeft); //gets margin left
  let newLeft = oldLeft + 5; //increments margin left
  cat.style.marginLeft = newLeft + 'px';
  if (parseInt(cat.style.marginLeft) > window.innerWidth) {
    // cat.style.marginTop = '0px';
    cat.style.marginLeft = '0px';
  }
}
// setInterval(catWalk2, 50);



// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

//TO TRY
//Inside the part of the half way, inside a clear Interval and start a new timer


let setIntervalHandle;
let direction = "right";
let newLeft;
let hasStopped = false;

const catDancing = function() {
  clearInterval(setIntervalHandle);
  cat.src = "images/dancingcat.gif";
  setTimeout(function() {
    setIntervalHandle = setInterval(catWalkForever, 50);
    cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  }, 5000);
  hasStopped = true;
}

const catWalkForever = function() {
  const oldLeft = parseInt(cat.style.marginLeft); //gets margin left
  if (direction === "right") {
      newLeft = oldLeft + 10; //increments margin left
      if (newLeft > window.innerWidth){
        direction = "left";
        hasStopped = false;
        cat.style.transform = "scaleX(-1)";
      }
  } else if (direction === "left") {
    newLeft = oldLeft - 10;
    cat.style.marginLeft = newLeft + 'px';
    if (newLeft < 0 - cat.width) {
      direction = "right";
      hasStopped = false;
      cat.style.transform = "scaleX(1)";
    }
  }

  if (direction === "right" && newLeft > (window.innerWidth/2 - cat.width/2) && hasStopped === false) {
    catDancing();
    return;
  } else if (direction === "left" && newLeft < (window.innerWidth/2 - cat.width/2) && hasStopped === false) {
    catDancing();
    return;
  }


  cat.style.marginLeft = newLeft + 'px';
};


setIntervalHandle = setInterval(catWalkForever, 50); // we are running setInterval (continuous function) and saving the result (running process number) to the handle variable (which we will need to clear the interval later)
