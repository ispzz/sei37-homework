const grains = {
    maxNoSquares: 64, // 2. Storing value into a variable so we know what '64' is for
    sum: 0, // 3. Total sum of all squares

    // 1. 2^0 = 1, 2^1 = 2, 2^3 = 4, 2^4 = 16, 2^5 = 32
    grainsInSquare: function(number) {
        return 2 ** (number - 1)
    },

    // 2. Loop through the total number of squares available on a chessboard to output a list of the amount of grains on every square
    // Use the function grainsInSquare to find the amount of grains per square
    grainsAllSquares: function() {
        for (let currentSq = 1; currentSq <= this.maxNoSquares; currentSq++) {
            console.log(`Square ${currentSq}: ${this.grainsInSquare(currentSq)}`);
            
        }
    },

    // 3. Loop through the amount of grains on each square and add it to the total sum
    totalGrains: function() {
        for (let i = 1; i <= this.maxNoSquares; i++) {
            this.sum += this.grainsInSquare(i);
        }
        return this.sum
    }
}
console.log(grains.grainsInSquare(3));
console.log(grains.grainsInSquare(4));
console.log(grains.grainsInSquare(5));
// grains.grainsAllSquares();
// console.log(grains.totalGrains());