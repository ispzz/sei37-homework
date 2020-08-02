// Ben Purvis, 7/9/2020
// Gave it a go using any string instead of fox 


isStringAMatch = (correctString, comparedString) => {
    if (correctString !== undefined){
        let stringArray = correctString.split("")
        for (let i = 0; i < stringArray.length; i++){
            return (stringArray[i] === comparedString)
        }
    }

}
appendCost = () => {
    let cost = 0;
    if (isStringAMatch()){
        cost -= 50
        console.log("Wow, the letter is correct! Good job. Your score is: " + cost)
    }else{
        cost += 100
        console.log("Congrats you did it! Your score is: " + cost)
    }
}
isStringAMatch("John Cena", "John Cena")
appendCost()