// console.log('Welcome to Callback Hell');
//
const sayHello = function(){
  console.log('Hello!');
};

// setTimeout(function(){
//   console.log('Hello!');
// }, 1000);

const runSomeFunctionFiveTimes = function(fnToRun) {
  for(let i = 0; i < 5; i++){
    console.log(`Run number ${i+1}:`);
    fnToRun();
  } // for
}; // runSomeFunctionFiveTimes()

const a = ['one', 'two', 'three'];

const each = function(array, fnToApply){
  for(let i = 0; i < array.length; i++){
    const currentItem = array[i];
    fnToApply(currentItem)
    // console.log(`Run number ${i+1}:`);
  }
}; // each()

each(a, function(item){
  console.log('Callback function running:', item);
});

// a.each do |item|
//   puts item
// end
