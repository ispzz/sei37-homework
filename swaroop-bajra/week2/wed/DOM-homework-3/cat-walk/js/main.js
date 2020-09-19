const img = document.querySelector('img');
img.style.position = 'relative';
img.style.left = '0px';

let counter = 0;

const catWalk = function(){

    let oldLeft = parseInt(img.style.left);
    let newLeft = oldLeft + 10;
    img.style.left = newLeft + 'px';

    if(parseInt(img.style.left) >= window.innerWidth - img.width){

    counter++;
    img.style.left = '0px';

  }

    if(counter === 2){

      img.style.webkitTransform ="scaleX(-1)";
      newLeft = oldLeft - 10;
      img.style.left = newLeft + 'px';

  }

    if(parseInt(img.style.left) < (window.innerWidth / 2)){
    window.setInterval(function () {
      
      img.src = "https://media3.giphy.com/media/1zRf1FsIIvtFO0PS7U/giphy.gif";
    }, 1000);
}

// if(parseInt(img.style.left) <= window.innerWidth - img.width){
//   img.style.webkitTransform ="scaleX(+1)";
//   newLeft = oldLeft + 10;
//   img.style.left = newLeft + 'px';
// }

// if(counter === 3) {
//   img.style.webkitTransform ="scaleX(+1)";
//   newLeft = oldLeft + 10;
//   img.style.left = newLeft + 'px';
//
// }

if(counter === 4){
  clearInterval(animate)
}

};

const animate = setInterval(catWalk,20);
