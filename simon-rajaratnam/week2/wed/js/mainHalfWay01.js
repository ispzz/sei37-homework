// Exercises: Animation
// The Cat Walk
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
//
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
//
//  </body>
// </html>
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

console.log('the cat walk');

const cat = document.querySelector('img');

//cat.style.left = '90%';


//cat.width = 340;

/*
const walkRight = setInterval( function () {
      const oldLeft = parseInt( cat.style.left );
      const newLeft = oldLeft + 5;
      cat.style.left = newLeft + '%';

      if ( cat.style.left == '80%' ) {
        console.log('cat is all the way right');
        clearInterval(walkRight);

        const walkLeft = setInterval( function () {
              const oldLeft = parseInt( cat.style.left );
              const newLeft = oldLeft - 5;
              cat.style.left = newLeft + '%';

              if ( cat.style.left == '0%' ) {
                console.log('cat is back home left');
                clearInterval(walkLeft);
              }
          }, 200);
      }
  }, 200);

*/


  walkRightFirstHalf = function(){ // walking right for the first half of the screen
    cat.style.left = '0px';
    cat.style.transform = "scaleX(1)";
      const walkRightID = setInterval( function () {
          const oldLeft = parseInt( cat.style.left );
          const newLeft = oldLeft + 10;
          cat.style.left = newLeft + 'px';

          if ( parseInt( cat.style.left ) >  ((window.innerWidth/2)-150) ) {// parsingInt because need to compare it to the screen width
            clearInterval(walkRightID);
            console.log('cat is half way');
            // DANCE !!!!
            walkRightSecondHalf();
          }
      }, 50); // end setInterval
  } // end walkRightFirst

  walkRightSecondHalf = function(){
      const walkRightID = setInterval( function () {
          const oldLeft = parseInt( cat.style.left );
          const newLeft = oldLeft + 10;
          cat.style.left = newLeft + 'px';

          if ( parseInt( cat.style.left ) >  ((window.innerWidth)-300) ) {
            console.log('cat is all the way right.');
            clearInterval(walkRightID);
            // DANCE !!!!
            walkLeftFirstHalf();
          }
      }, 50); // end setInterval
  } // end walkRight

  walkLeftFirstHalf = function() {
      cat.style.transform = "scaleX(-1)";
      const walkLeftID = setInterval( function () {
          const oldLeft = parseInt( cat.style.left );
          const newLeft = oldLeft - 10;
          cat.style.left = newLeft + 'px';

          if ( parseInt( cat.style.left ) < ((window.innerWidth/2)-150) ) {
            console.log('cat is half way again');
            clearInterval(walkLeftID);
            walkLeftSecondHalf();
          }
      }, 50); // end setInterval
  } //end walkLeft

  walkLeftSecondHalf = function() {
      cat.style.transform = "scaleX(-1)";
      const walkLeftID = setInterval( function () {
          const oldLeft = parseInt( cat.style.left );
          const newLeft = oldLeft - 10;
          cat.style.left = newLeft + 'px';

          if ( parseInt( cat.style.left ) < 1 ) {
            console.log('cat is back home left');
            clearInterval(walkLeftID);
            walkRightFirstHalf();
          }
      }, 50); // end setInterval
  } //end walkLeft

  walkRightFirstHalf();



/*
const walkleft = setInterval( function () {
      const oldLeft = parseInt( cat.style.left );
      const newLeft = oldLeft - 5;
      cat.style.left = newLeft + '%';

      if ( cat.style.left == '50%' ) {
        console.log('cat is back home left');
        clearInterval(walkLeft);
      }
  }, 200);


/*
if ( cat.style.left === 50% ){
  clearInterval(walkRight);
}
//clearInterval
/*
const animationID = window.setInterval(function(){
    walkIt.width += 10;
    //when cat get to middle of the screen, dance.
}, 100);
*/
