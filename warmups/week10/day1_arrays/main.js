// reverse
const array1 = ["one", "two", "three", "four"];

const reverseArray = function(array) {
    let output = [];

    // 1.
    // for (let i = array.length - 1; i >= 0; i--) {
    //     const element = array[i];
    //     // console.log(element);
    //     output.push(element);
    //     console.log(output);
    // }

    // 2.
    // for (let i = 0; i < array.length; i++) {
    //     output.unshift(array[i]);
    //     console.log(output);
    // }

    // 3.
    console.log(array.reverse());
}

// reverseArray(array1);

// flatten
const array2 = [ "Hello", ["World", 42] ];

const flatten = function(array) {
    let output = [];

    for (let i = 0; i < array.length; i++) {
        console.log('outer array:', array[i]);
        const currentItem = array[i];

        if(Array.isArray(currentItem)) {
            // If there's a nested array - iterate through it and output the elements
            for (let j = 0; j < currentItem.length; j++) {
                const innerArrayItem = currentItem[j];
                console.log('inner array:', innerArrayItem);
                output.push(innerArrayItem);
            } // currentItem end loop
        } else {
            // else there's no inner array then just pust the current array into output
            output.push(currentItem);
        }
    } // outer
    console.log(output);
}

// flatten(array2);

// Recursive flatten
// const flattenRecursion = function(array, output = []) {
//     for (let i = 0; i < array.length; i++) {
//         const currentItem = array[i];
//         if(Array.isArray(currentItem)) {
//             flattenRecursion(currentItem, output);
//         } else {
//             output.push(currentItem);
//         }
//     }
//     return output;
// }

// console.log(flattenRecursion(array2));

const flattenRecursion = function(array, output = []) {
    array.forEach(function(currentItem) {
        if(Array.isArray(currentItem)) {
            flattenRecursion(currentItem, output);
        } else {
            output.push(currentItem);
        }
    });
    return output;
}

console.log(flattenRecursion(array2));