
console.log('Hello, world!');
console.log(' ');

// Given a rectangle object like the one below, write the following functions:

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function(rect){
  // console.log(rect.length, rect.width);
  // if(rect.width === rect.length){
  //   return true;
  // } else }
  // return false;
  // }

  return rect.width === rect.length;

};

const result = isSquare(rectangle);
console.log(`Is the rectanlge square? ${result}`);
