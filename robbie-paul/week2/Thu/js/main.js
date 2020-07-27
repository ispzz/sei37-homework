const catDom = document.querySelector('.catDom');

const loop = function () {
  setTimeout(function () {           //like a parent function, giving child extra abilities    
    // return value of 'setTimeout' is integer that is the index ID of that particular timer as it exists inside memory. 
    walkStep(); 
    loop();
  }, 50);
}

function walkStep() {
  const currentRight = catDom.style.right;
  console.log()
  
  let newRight;
  if (currentRight) {
    newRight = 0;
  } else {
    newRight = currentRight + 10;
  }
  catDom.style.right = `${newRight}px`;
}


// loop()