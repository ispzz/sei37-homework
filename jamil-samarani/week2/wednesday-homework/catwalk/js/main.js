//Create a variable to store a reference to the img.
//Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
const cat = document.querySelector("img");

cat.style.position = "absolute";
cat.style.left = "0px";



//Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

    // const catWalk = setInterval( function(){
    //   const oldLeft = parseInt(cat.style.left);
    //   const newLeft = oldLeft + 2;
    //   cat.style.left = newLeft + "px";
    // }, 50 );





// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.


//     const catWalkLength = (window.innerWidth - cat.width) + "px";
//
const catWalk = setInterval( function(){
  const oldLeft = parseInt(cat.style.left);
  const newLeft = oldLeft + 1;
  cat.style.left = newLeft + "px";

  if (newLeft > window.innerWidth - cat.width){
    cat.style.left = 0;
  };
});

//     cat.style.left = 0;
//   }; //if
//
//
// setInterval(catWalk, 50);

$(document).on('click',function(){
  const audio = new Audio("I'm Too Sexy.mp3");
  audio.play();

// });
