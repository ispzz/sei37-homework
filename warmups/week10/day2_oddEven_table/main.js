const evenOddSums = (array) => {
    let evenSum = 0;
    let oddSum = 0;

    // array.forEach(num => {
    //     if ( num % 2 === 0 ) {
    //         evenSum += num;
    //     } else {
    //         oddSum += num;
    //     }
    // });
    array.forEach(num => (( num % 2 === 0 ) ? evenSum += num : (oddSum += num)));
    return [evenSum, oddSum];
}
console.log(evenOddSums([50, 60, 60, 45, 71]));

const multiTable = () => {
    for (let i = 0; i <= 12; i++) {
        console.log(`---- ${i} ----`);
        for (let j = 0; j <= 12; j++) {
            let sum = i * j;
            console.log(`${i} x ${j} = ${sum}`);
        }
        
    }
}
console.log(multiTable());

const multiTableTwo = () => {
    const output = [];
    for (let i = 0; i <= 12; i++) {
        const row = [];
        for (let j = 0; j <= 12; j++) {
            let sum = i * j;
            row.push(sum);
        }
        output.push(row);
    }
    return output;
}
console.log(multiTableTwo());
console.table(multiTableTwo());