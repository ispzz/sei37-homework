// The Calculator

function squareNumber(num) {
  let ans = num * num;
  // console.log("The result of squaring the number "+num+" is "+ans);
  console.log(`The result of squaring the number ${num} is ${ans}`);
}
squareNumber(3);

function halfNumber(num) {
  let ans = num / 2;
  console.log(`Half of the number ${num} is ${ans}`);
}
halfNumber(3);

function percentOf(num1, num2) {
  let ans = (num1 * 1/100) * num2;
  console.log(num2+" is "+ans+" of "+num1);
}
percentOf(4, 2);

function areaOfCircle(radius) {
  let ans = 2 * 3.14 * (radius * radius);
  console.log("The Area of circle with radius "+radius+" is "+ans);
}
areaOfCircle(3);

function oneNum(num){

  let hn = halfNumber(num);
  let sn = squareNumber(hn);
  let ac = areaOfCircle(sn);
  let pc = percentOf(sn, ac);

console.log("Half of the number "+num+" is "+hn);
console.log("The result of squaring the number "+hn+" is "+sn);
console.log("The Area of circle with radius "+sn+" is "+ac);
console.log(ac+" is "+pc+"% of "+sn);

}
oneNum(9);
