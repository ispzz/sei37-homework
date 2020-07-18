console.log('test.js');

theFunction = function() {
    timer = 0;
    const timerID = setInterval( function() {
        timer++;
        if (timer > 3) {
          clearInterval(timerID);
        };
        console.log(`timer value`, timer);
    }, 1000)
    console.log('setInterval finished');
}

// tests reveal that the code will run through and past the setInterval even though the setInterval will be "looping".. Makes it tricky to call a function after it has executed.. Must use an external counter I guess.

Maybe need to write a masterControler function that calls the wakling functions but also has a variable counter that keeps track of what iteration the walking function is in.
Possible solution:
    1. The variable counter(or maybe it's a variable called state, which indicated what state the walking functions are in. ie. walking funcitons change the "state" to true when completed) of the masterControler function would need to loop to check the "state" or "counter". When the variable is ready, the loop would "break" and the masterController would go to the next walking function.
