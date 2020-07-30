const catDom = document.querySelector('.catDom');

const loop = function () {
  setTimeout(function () {           //like a parent function, giving child extra abilities    
    // return value of 'setTimeout' is integer that is the index ID of that particular timer as it exists inside memory. 
    walkStep(); 
    loop();
  }, 50);
}

function walkStep() {
  const currentLeft = catDom.style.left;
  console.log()
  
  let newLeft;
  if (isNaN?currentLeft) {
    newLeft = 0;
  } else {
    newLeft = currentLeft + 10;
  }
  catDom.style.left = `${newLeft}px`;
}


// loop()