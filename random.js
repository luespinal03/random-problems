/* 

Practice only!  Nothing you need to submit !
1. Write a function that takes in a name string and adds "Hi, " before the name

2. Write a function that takes in 2 strings and returns which one is bigger. 
if equal (strings are the same size), tell the user they are equal and print both

3. Write a function that takes in 2 numbers and returns which 1 is greater, if
equal return message to the user saying they are the same number

4. write a function that takes in an array of numbers and adds 5 to each odd number then returns the updated array

5. write a function that takes in an array of numbers and returns the total
of those numbers

6. write a function that takes in a number n that is between 1 and 10
then prints every number less than or equal to 100 that is divisible by that number n
for example
if n is 7
you would print
7
14
21
28
35
42
49
56
63
70
77
84
91
98

*/




////////////////////////////////////////////////////////////////////////////////
// 1. 

// Write a function that takes in a name string and adds "Hi, " before the name


function name1(name) {
    return `Hi ${name}`
}
console.log(name1('Pedro!'))


////////////////////////////////////////////////////////////////////////////////
// 2.

// Write a function that takes in 2 strings and returns which one is bigger. 
// if equal (strings are the same size), tell the user they are equal and print both


function longArray(array1, array2) {
    if (array1.length < array2.length) {
        return 'The second array is bigger than the first one'
    } else if (array1.length === array2.length) {
        return 'Both strings are the same length'
    } else {
        return ''
    }
}

console.log(longArray('Today is Thursday', 'Today is our last day of class for the week'))


////////////////////////////////////////////////////////////////////////////////
// 3.

// Write a function that takes in 2 numbers and returns which 1 is greater, if
// equal return message to the user saying they are the same number

function biggerNumber(num1, num2) {
    if (num1 < num2) {
        return `Looks like num2 (${num2}) is larger than num1 (${num1})`
    } else if (num1 > num2) {
        return `Well, looks like num1 (${num1}) is larger than num2 (${num2})`
    } else if (num1 === num2) {
        return `Both num1 (${num1}) and num2 (${num2}) are equal to each other`
    }
}

console.log(biggerNumber(10, 8))


////////////////////////////////////////////////////////////////////////////////
// 4.

// write a function that takes in an array of numbers and adds 5 to each odd number then returns the updated array

function addFive(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray[i] = array[i] + 5;
        } else if (array[i] % 2 === 0) {
            newArray[i] = array[i]
        }
    }
    return newArray
}

console.log(addFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
//                   6     8     10    12    14   


////////////////////////////////////////////////////////////////////////////////
// 5. 

// write a function that takes in an array of numbers and returns the total
// of those numbers

function arrayNum(numArray) {
    let total = 0
    for (let i = 0; i < numArray.length; i++) {
        total = numArray[i] + total
    }
    return total
}
console.log(arrayNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


////////////////////////////////////////////////////////////////////////////////
// 6. 

// write a function that takes in a number n that is between 1 and 10
// then prints every number less than or equal to 100 that is divisible by that number n

function timesTables (numberN){
    let groot = numberN; 
    while(groot < 100){
        console.log(groot);
        groot = groot + numberN;
    }
}
console.log("\nTable of 7\n")
timesTables(7)