const numberElements = document.getElementsByTagName("h4")
const squareroot = document.getElementById("square-root")
const multiply = document.getElementById("multiply")
const sum = document.getElementById("sum")
const divide = document.getElementById("divide")
const minus = document.getElementById("minus")
const halfNumber = document.getElementById("half-number")
const  input = document.getElementsByTagName("input")
const calculate = document.getElementById("express")

getNumberClicked = () => {
    for (let i = 0; i < numberElements.length; i++){
        numberElements[i].addEventListener("click", () => {   
            number = Number.parseInt(numberElements[i].innerText)
            if (Number.isInteger(number))          
                input[0].value += number
        }, false)
    }
}
halfInputNumber = () => {
    halfNumber.addEventListener("click", () => {
        input[0].value = getInputText() / 2
    })
}
appendMultiply = () => {
    multiply.addEventListener("click", () => {
        input[0].value += "x"
    })
}
appendDivide = () => {
    divide.addEventListener("click", () => {
        input[0].value += "÷"
    })
}
appendSum = () => {
    sum.addEventListener("click", () => {
        input[0].value += "+"
    })
}
appendMinus = () => {
    minus.addEventListener("click", () => {
        input[0].value += "-"
    })
}
appendSquarerootSymbol = () => {
    squareroot.addEventListener("click", () => {
        input[0].value += "²"
    })
}
calcualteEquation = () => {
    calculate.addEventListener("click", () => {
        input[0].value = createExpression()
    })
}
calculateSquareroot = () => {
    return Math.sqrt(getInputText())
}
validateInput = (text) => {
    if (text.includes("--") 
    || text.includes("++") 
    || text.includes("xx") 
    || text.includes("²²") 
    || text.includes("÷÷")){
        input[0].style.borderColor = "red"
        return false
    }
    else{
        input[0].style.borderColor = "black"
        return true
    }
}
createExpression = () => {
    if (validateInput(input[0].value)){
        let expression = input[0].value.replace("÷", "/").replace("x", "*")
        return eval(expression)
    }       
}
getInputText = () => {
    return input[0].value
}

calcualteEquation()
appendMinus()
appendSum()
appendMultiply()
appendDivide()
halfInputNumber()
appendSquarerootSymbol()
getNumberClicked()
