// Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
// Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
// Finally, return your modified array.

// addStringIfLastS(['test', 'testing', 'testings'], 'TEST')) => ['test', 'testing', 'testingsTEST']

// addStringIfLastS(['you', 'should', 'not', 'see'], 'TEST')) //['you', 'should', 'not', 'see']

function addStringIfLastS(arrays, sillyStrings) {
    let newArray = []
    for (let i = 0; i < arrays.length; i++) {
        // takes the value from every [i]
        let arrayString = arrays[i]
        
        // if the last index of our indexes equals 's' || 'S'
        if (arrayString[arrayString.length - 1] === 's' || arrayString[arrayString.length - 1] === 'S') {
            // if we find an array[i] that has the last index be a 's' || 'S'

            /* then that same array[i] = array[i].concat(sillyStrings) */
            // arrays[i] = arrays[i].concat(sillyStrings);
            newArray.push(arrays[i].concat(sillyStrings));
        } else {
            newArray.push(arrays[i])
        }
    }
    // return arrays
    return newArray
}

console.log(addStringIfLastS(['test', 'testing', 'testings'], 'TEST')); //  => ['test', 'testing', 'testingsTEST']
console.log(addStringIfLastS(['you', 'should', 'not', 'see', ], 'TEST')); //['you', 'should', 'not', 'see']


// ========================[ Empty Array Method ]===============================