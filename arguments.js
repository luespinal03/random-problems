// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = "Anonymous", score = 0) {
    
    return `Name ${name} - Score: ${score}`;
}
console.log("")
let scoreText = getScoreText(undefined, 100) // undefined, 100: maintains the value of "Anonymous" for "name" but gives the score of 100 to varibale "score". A value must be provided for the first argumeent in order to reach the other arguments after the first argument
console.log(scoreText)

console.log("")

// Challenge area
// a 25% tip on $40 would be $10
let getTip = function (total, tipPercent = .2) {
    return ` A 25% tip on $${total} would be $${total * tipPercent}`
}

let billTotal = getTip(60, .20)
console.log(billTotal)

console.log("")

let name = 'Luis';
let age = 26;
console.log(`Hey my name is ${name} and I am ${age}`);