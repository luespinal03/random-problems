/* 


1. Write a function that takes in 2 parameters, both arrays of numbers
return a result array that includes the number at index 0 in the first array,
then the number at index 0 in teh second array, then the number at index 1
in the first array, then the number at index 1 in the 2nd array and so on
assume both arrays will be the same size and neither will be empty
examples:

Exp1
array 1: [5, 7, 14, 5]
array 2: [6, 2, 22, 1]
resultArray: [5, 6, 7, 2, 14, 22, 5, 1]

Exp2
array 1: [3, 8]
array 2: [19, 3]
resultArray: [3,19,8,3]

2 Write a function foundCat() that takes in an array of strings
if the word 'cat' is in the array, return true.  or else return false
you can assume all strings will be lower case.


3. Write a function oddOnesOut()
that takes in an array of numbers
return an array with the same numbers, but all 1's removed

[1,2,1,1,3,5,1] => [2,3,5]
[0,-1,5,1,5,0] => [0,-1,5,5,0]
[1,1,1,1,1,1] => []

4. Write a function that takes in a string and adds a space after each character
and returns the string
'string' => 's t r i n g'
'wow' => 'w o w'
'hello world' => 'h e l l o   w o r l d'


5. Write a function called stringCompareCounter that takes in 2 strings of the same length
as parameters.  return a count of how many characters the strings share at the same index
for example

stringCompareCounter('cat','cow') => 1 (strings share the same character at index 0)
stringCompareCounter('count','touch') => 2 (strings share the same characters at indexes 1 and 2)
stringCompareCounter('well','sell') => 3 (strings share same characters at indexes 1,2, and 3)


6. Write a function called duplicate() that takes in an array and returns true if the array 
contains at least 2 of the same item.

['hi', 'wow, 'hey', 'hi'] => true
['one', 'two' 'three'] => false
[1,7,32,1,10,2,11] => true

*/


////////////////////////////////////////////////////////////////////////////////
// 1. 

// 1. Write a function that takes in 2 parameters, both arrays of numbers
// return a result array that includes the number at index 0 in the first array,
// then the number at index 0 in teh second array, then the number at index 1
// in the first array, then the number at index 1 in the 2nd array and so on
// assume both arrays will be the same size and neither will be empty
// examples:

// Exp1
let array1 = [5, 7, 14, 5]
let array2 = [6, 2, 22, 1]
// resultArray: [5, 6, 7, 2, 14, 22, 5, 1]

// Exp2
// array 1: [3, 8]
// array 2: [19, 3]
// resultArray: [3,19,8,3]

function alternating(para1, para2) {
    let resultArray = []
    for (let i = 0; i < para1.length; i++) {
        resultArray.push(para1[i])
        resultArray.push(para2[i])
    }
    return resultArray
}

console.log(alternating(array1, array2))

////////////////////////////////////////////////////////////////////////////////
// 2. 2 Write a function foundCat() that takes in an array of strings
// if the word 'cat' is in the array, return true.  or else return false
// you can assume all strings will be lower case.


function foundCat(array) {
    console.log(array)
    for (let i = 0; i < array.length; i++) {

        if (array.indexOf('cat') === -1) {
            return false
        } else {
            return true
        }
    }
}


console.log(foundCat(['dog', 'cat', 'lizard', 'rabbit']));
console.log(foundCat(['pato', 'lion', 'zebra', 'cheetah']))


////////////////////////////////////////////////////////////////////////////////
// 3. 

// 3. Write a function oddOnesOut()
// that takes in an array of numbers
// return an array with the same numbers, but all 1's removed

// [1,2,1,1,3,5,1] => [2,3,5]
// [0,-1,5,1,5,0] => [0,-1,5,5,0]
// [1,1,1,1,1,1] => []

function oddOnesOut(array1) {
    let emptyArray = []
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === 1) {
            continue;
        } else if (array1[i] !== 1) {
            emptyArray.push(array1[i])
        }
    }
    return emptyArray
}

console.log(oddOnesOut([1, 2, 1, 1, 3, 5, 1]))
console.log(oddOnesOut([0, -1, 5, 1, 5, 0]))
console.log(oddOnesOut([1, 1, 1, 1, 1, 1]))

/////////////////////////////////////////////////////////////////////////
// 4. 
// 4. Write a function that takes in a string and adds a space after each character
// and returns the string
// 'string' => 's t r i n g'
// 'wow' => 'w o w'
// 'hello world' => 'h e l l o   w o r l d'

function space(banana) {
    newBanana = banana.split('').join(' ') // split it and join it again with a space in between everything that has been split. This explains the .join(' ') instead of .join('')
    return newBanana
}

console.log(space('string'))
console.log(space('wow'))
console.log(space('hello world'))

/////////////////////////////////////////////////////////////////////////
// 5. 

// Write a function called stringCompareCounter that takes in 2 strings of the same length
// as parameters.  return a count of how many characters the strings share at the same index
// for example

// stringCompareCounter('cat','cow') => 1 (strings share the same character at index 0)
// stringCompareCounter('count','touch') => 2 (strings share the same characters at indexes 1 and 2)
// stringCompareCounter('well','sell') => 3 (strings share same characters at indexes 1,2, and 3)

function stringCompareCounter(banana1, banana2) {
    let ctr = 0

    for (let i = 0; i < banana1.length; i++) {
        if (banana1[i] === banana2[i]) {
            ctr++
            // console.log(banana1)
            // console.log(banana2)
        }
    }
    return ctr
}

console.log(stringCompareCounter('cat', 'cow'))
console.log(stringCompareCounter('count', 'touch'))
console.log(stringCompareCounter('well', 'sell'))



/////////////////////////////////////////////////////////////////////////
// 6. 

// Write a function called duplicate() that takes in an array and returns true if the array 
// contains at least 2 of the same item.

// ['hi', 'wow, 'hey', 'hi'] => true
// ['one', 'two' 'three'] => false
// [1,7,32,1,10,2,11] => true

function duplicate(groot) {
    
    let seen = []
    for (let i = 0; i < groot.length; i++) {
        if (seen.indexOf(groot[i]) === -1) { // push each item from groot into seen one by one as long as its NOT already there. 
            seen.push(groot[i]) 
        } else if (seen.indexOf(groot[i]) !== -1){ // REMEMBER -1 = undefined (so if its not undefined means its already in there therefore return 'true' becasue it is indeed already there)
            return true // if it is already in seen then we return true because thats what greyson asked
        }
    }
    return false // we jump outside of the loop because we didnt get a check inside of our loop. Therefore, return false becasue if we didnt get a hit inside of our loop it means what we had in our loop wasnt true. aka 'false' becasue there is nothing duplicated in that specific array.
}


console.log(duplicate(['hi', 'wow', 'hey', 'hi'])) // true
console.log(duplicate(['one', 'two', 'three'])) // false
console.log(duplicate([1, 7, 32, 1, 10, 2, 11])) // true