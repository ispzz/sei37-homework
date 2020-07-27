console.log ('Coding Dictionary');

const dictionary = {

  definitions: {
    'method': 'a function which is defined inside an object (ie. value of a key)',
    'scope' : 'the visibility or lifetime of a variable within a program',
    'variadic function' : 'a function which accepts a variable number of arguments',

   }

};

lookupTerm: function( term ){
  term = term.toLowerCase();
  if (term in this.definitions)
  console.log(`${term}: ${this.definitions[term]}`);
} else {
  console.log (`c%Sorry, "${term}" is not in the dictionary.`, 'color: blue;' );

},

printAllDefinitions: function(){

  for(const key in this.definitions){
    console.log(` ${key} : ${this.definitions[key]} `);
  }
  console.log(`Total entries: ${ definitionCount}`);
 },

addDefinition: function ( term, definition ){
 if( term in this.definitions){
   console.log ('METHOD IS ALREADY THERE')
 }else{
  this.definitions[term] = definition;
  console.log("TERM ADDED")
 }
  this.lookupTerm ( term );
}, // Add a new definition dictionary.addDefinition('definition', 'explanation')

removeDefinition: function ( term ){
  //removes data
  },

searchAllDefinitions: function ( searchString ){
    //looks for alll the definiton and texts in the dictionary
  }

};

//
// const StudentFactory = function( name, age){
//   const student = {};
//   student.name = name; //doesnt have to be or match with const StudentFactory
//   student.age = age;
//   return {name:, age:}
// };
//
// const ryan = StudentFactory ('Ryan', 18);
// const ryan = StudentFactory ('Nemo', 32);

// const Student = function( name, age ){
//   console.log ('value of "this":', this);
//   this.name = name;
//   this.age = age;
//   this.greet = function(){
//     console.log(`Hi, I'm ${name}`);
//   };
// }; //Student
// const nemo = new Student ('Nemo', 18);

console.log('Thursday homework: Geometry, cash, bank');

console.log(Geometry);
  const rectangle:{
length: 4,
 width: 4,
};

const isSquare = function (rect){
  //const log rect/length/width
  // console.log( rect.length, rect.width);
  // if (rect.width=== rect.length){
  //   return true,
  // }else{
  //   return false;
  // }
  // } or simpler way below
  return = rect.width === rect.length;
};

const result = isSquare( rectangle );
console.log(`Is the rectangle square? ${result}`);

console.log('Cash Register');

const cartForParty ={
  banana: '1.25',
  hankerchief: '0.99',
  tshirt: '25.01',
  apple: '0.60',
  nalgene: '10.34',
  protienShake: '22.34'
}

const cashRegister = function( cart ){

  let runningTotal = 0;
//for in
  for(const key in cart){
  console.log (key, cart[key]);
  runningTotal += parseFloat(cart[key]);
  }
  console.log( runningTotal );
};

cashRegister(cartForParty);

console.log('GA BANK! GIVE US YOUR MONEY!!!');

const bank = {

  accounts: [
  {name: "Nemo", balance: 2000.10},
  {name: "Dom", balance: 500.50},
  {name: "Tony", balance: 400.25},
  {name: "Alex", balance: 30000.65},
  {name: "Sam", balance: 2000.40},
  {name: "Ahmed", balance: 500000},
  {name: "Haysam", balance: 40000},
  {name: "David", balance: 0.95},
]}, // search : bank.account.length

deposit: function (accountName, amount){
  console.log(`in bank.deposit(${accountName},${amount})`);
  }
for(let i = 0; i< this.accounts.length; i++){
  const currentAccount = this.accounts[ i ];
  if( currentAccount.name === accountName );
  console.log("Found Account!", currentAccount );
   currentAccount.balance += amount;
   foundAccount = true;
   break; //stop searching
   } //if
  } //for
  if( foundAccount=== false){
    console.log('No such account!')
  }
 }  // deposit()
}; //bank
