const greaterNum = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(`The greater number of 5 and 10 is ${greaterNum(5, 10)}`);
console.log(`The greater number of 9 and 3 is ${greaterNum(9, 3)}`);



const helloWorld = function( code ){
  if ( 'en' === code ) {
    return 'Hola Mundo';
  } else if ( 'de' === code ) {
    return 'Hallo Welt';
  } else {
    return 'Hello, World';
    }
  };

console.log( helloWorld('es') );
console.log( helloWorld('de') );
console.log( helloWorld('en') );


const assignGrade = function( score ) {
  if ( score > 90 ) {
    return 'A'
  } else if ( score <= 90 && score > 80) {
    return 'B'
  } else {
    return 'C'
  }
};

console.log(assignGrade(5));
console.log(assignGrade(100));
console.log(assignGrade(90));



const pluralize = function ( noun, number ) {
  const message = `${number} ${noun}`;
  if ( 1 === number) {
    return message;
  } else {
    return message + `s`;
  }
};

console.log( pluralize('cat', 5) );
console.log( pluralize('dog', 1) );
console.log( pluralize('turtle', 0) );








//////////// THE CALCULATOR //////////////////////////////

const squareNumber = function(number) {
  return number*number;

};

console.log(squareNumber(2));


//////////////////


const halfNumber = function(number) {
  const result = number / 2
  return result
};

console.log(halfNumber(5));


/////////////////


const percentOf = function ( a, b ) {
  return ( a / b ) * 100
};

console.log(percentOf(2, 5));


//////////


const areaOfCircle = function(radius) {
  return radius * Math.PI * radius
};

console.log(areaOfCircle(2).toFixed(2));


//////////////////


const partTwo = function(number) {
  const resultOne = number / 2
  const resultTwo = resultOne**2
  const resultThree = Math.PI * resultTwo**2
  // const resultFour = (resultThree/resultTwo) * 100;
};

console.log(partTwo(100));

// // const squareNumber = function ( number ) {
// //   const square = number**2
// //   return square;
// // };
// //
// // console.log('The result of squaring the number 3 is ' + squareNumber(3));
//
//
//
//
//
//
//
//
//
//
//
//
// // const squareNumber = function(number){
// //   const result = number**2;
// //   console.log(`The square of ${number} is ${result}`);
// //   return result;
// // };
// // squareNumber(3);
//
//
// /////////
//
// const halfNumber = function ( number ) {
//   const half = number/2
//   return half;
// };
//
// console.log('Half of 5 is ' + halfNumber(5));
//
//
// // const halfNumber = function(number){
// //   const result = number / 2;
// //   console.log(`Half of ${number} is ${result}`);
// //   return result;
// // };
// // halfNumber(4);
//
//
// /////////////
//
//
// // const percentOf = function( w, q ) {
// //   const w = w/q
// //   return w;
// // };
// // console.log(percentOf(2));
//
// ////////////
//
//
// const areaOfCircle = function( radius ) {
//   const area = radius*radius*Math.PI
//   return area;
// };
//
// console.log('The area for a circle with radius 8 is ' + areaOfCircle(8));
