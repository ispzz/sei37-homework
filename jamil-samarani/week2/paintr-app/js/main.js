console.log("Paintr!");

/*
Paintr!

1. When the user moves the mouse around,
2. draw a coloured circle at the mouse position.
  2a. get the mouse position
  2b. create a ,div. and add it to the DOM at the given mouse position.

*/
let hue = 0; //runs once at the start

// PROCESS BELOW
const drawBlob = function(xPos, yPos){
  const blobSize= 100;

  //runs every time there is an event
  const blobColor = `hsla(${hue}, 100%, 50%, 30%)`; //hue saturation lightness opacity
  hue = hue + 1; // keep growing hue. It will wrap at 360

  //2b. Create a new div.blob and place it on the DOM at the mouse position
  const $blob = $('<div class="blob">'); // detached!

  // Set the position and colour etc using .css()
  $blob.css({
    top: yPos - (blobSize/2) + 'px', //how far from the top should this new <div> appear
    left: xPos - (blobSize/2) + 'px', //how far from the left etc

    width: blobSize + 'px',
    height: blobSize + 'px',

    backgroundColor: blobColor,

  });//$blob

  //Add the new div to the DOM
  $('body').append( $blob );


}; // end drawBlob()


// Wait for the DOM
$(document).ready(function(){
  // console.log("DOM ready!");

  // Respond to mouse movement by running a callback function: and check it logs values in browser
  $(document).on('mousemove', function(ev){

    // console.log("mouse moved", ev.clientX, ev.clientY);

    // here was the blob code

    //To actually draw blob at the mouse position
    // Only draw blobs when the shift key is held during this mouse move event
    if( ev.shiftKey ){//this event is predefined by the browser
    drawBlob( ev.clientX, ev.clientY );
  };

  }); //on mousemove



}); // $(document).ready()
