// function - input (argument), code, output (return value)

let greetUser = function () {
    console.log("Welcome user!")
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)


// Challenge area 



let temp = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9
    return celcius
}

let valOne = temp(32)
let valTwo = temp(68)

console.log(valOne)
console.log(valTwo)