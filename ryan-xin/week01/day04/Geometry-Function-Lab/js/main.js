// Geometry Function Lab

// Part 1, Rectangle
console.log("Rectangle");

// Given a rectangle object like the one below, write the following functions:
const rectangle = {
  length: 4,
  width: 4,
};


// isSquare(rect) - Returns whether the rectangle is a square or not
const isSquare = function(rect) {
  if(rect.length === rect.width) {
    return `It is a square.`;
  } else {
    return `It is not a square.`;
  }
}; // isSquare
isSquare(rectangle);
console.log(isSquare(rectangle));


// area(rect) - Returns the area of the rectangle
const area = function(rect) {
  const rectArea = rect.length * rect.width;
  return rectArea;
} // area
area(rectangle);
console.log(area(rectangle));


// perimeter(rect) - Returns the perimeter of the rectangle
const perimeter = function(rect) {
  const rectPerimeter = (rect.length + rect.width) * 2;
  return rectPerimeter;
} // perimeter
perimeter(rectangle);
console.log(perimeter(rectangle));

// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.




// Part 2, Triangle
console.log("Triangle");


// Given a triangle object like the one below, write the following functions:
const triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
const isEquilateral = function(tri) {
  if(tri.sideA === tri.sideB && tri.sideA === tri.sideC && tri.sideB === tri.sideC ) {
    return `It is equilateral.`;
  } else {
    return `It is not equilateral.`;
  }
}; // isEquilateral
isEquilateral(triangle);
console.log(isEquilateral(triangle));


// isIsosceles(tri) - Returns whether the triangle is isosceles or not
const isIsosceles = function(tri) {
  if(tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC) {
    return `It is isosceles.`;
  } else {
    return `It is not isosceles.`;
  }
}; //isIscoceles
isIsosceles(triangle);
console.log(isIsosceles(triangle));


// area(tri) - Returns the area of the Triangle
const area2 = function(tri) {
  const a = tri.sideA;
  const b = tri.sideB;
  const c = tri.sideC;
  const p = (a + b + c) / 2;
  const triArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return triArea;
}; // area
area2(triangle);
console.log(area2(triangle))


// isObtuse(tri) - Returns whether the triangle is obtuse or not
const isObtuse = function(tri) {
  let longestSqr;
  let shortSqrSum;
  if(tri.sideA > tri.sideB && tri.sideA > tri.sideC) {
    longestSqr = tri.sideA ** 2;
    shortSqrSum = tri.sideB ** 2 + tri.sideC ** 2;
  }
  if(tri.sideB > tri.sideA && tri.sideB > tri.sideC) {
    longestSqr = tri.sideB ** 2;
    shortSqrSum = tri.sideA ** 2 + tri.sideC ** 2;
  }
  if(tri.sideC > tri.sideA && tri.sideC > tri.sideB) {
    longestSqr = tri.sideC ** 2;
    shortSqrSum = tri.sideA ** 2 + tri.sideB ** 2;
  }

  if(longestSqr > shortSqrSum) {
    return `It is obtuse.`;
  } else {
    return `It is not obtuse.`;
  }
}; // isObtuse
isObtuse(triangle);
console.log(isObtuse(triangle));

// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.
