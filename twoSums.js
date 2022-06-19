// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// .replace()

// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");
// .replace("replace this", "with this")

// .split The split() method splits a String object into an array of strings by separating the string into sub strings. 

// "I am a string" --> ["I", "a", "m", "a", "s", "t", "r", "i", "n", "g"]





let input = [2, 7, 11, 15]
let target = 9
// let totalInx =
// expected output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// I want this function to somehow compare any index item from the input. To then print out if any of them added up together === target

function twoNums(input, target) {
    let total = []
    for (let x in input) {  // "in" checks if a specified property exists in an object or in its inherited properties
        for (let y in input) {
            // see if array[x] + array[y] === total
            // save successful combos to total array
            if (input[x] + input[y] === target) {
                total.push([input[x], input[y]])
                // if i get a successful combination, push the indexes into my total array
            }
        }

    }
    return total
}


console.log(twoNums(input, target))





