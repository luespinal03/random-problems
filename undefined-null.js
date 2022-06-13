// Undefined for variable
let name

name = "Jen"

if (name === undefined) {
    console.log("Please provide a name")
} else {
    console.log(name)
}

// Undefined for function arguments
let square = function (num) {
    console.log(num) // prints out undefined
}

let result = square()
console.log(result) // prints out undefined

// Null as assigned value
let age = 27

age = null

console.log(age) // prints out undefined