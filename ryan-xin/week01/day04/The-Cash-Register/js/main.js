// The Cash Register
console.log("The Cash Register");

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty); // 60.55
const cashRegister = function(cartItem) {
  let totalPrice = 0;
  for( let key in cartItem) {
    // totalPrice += parseFloat(cartItem[key]);
    totalPrice += Number(cartItem[key]);
    // totalPrice += cartItem[key] * 1;
  }
  return totalPrice;
};
cashRegister(cartForParty);
console.log(cashRegister(cartForParty));
