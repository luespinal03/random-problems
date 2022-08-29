// Input: [4, 3, 2, 4, 1, 3, 2]
// Output: 1
// Here’s the function signature:
// def singleNumber(nums):
//   # Fill this in.

// print singleNumber([4, 3, 2, 4, 1, 3, 2])
// # 1
// Given a list of numbers, where every number shows up twice except for one number, find that one number.

function singleNumber(nums) {
    let repeated = []
    let nonRep = []

    for (let i = 0; i < nums.length; i++) {
        if ((nonRep.indexOf(nums[i]) !== -1)) { // if it is in nonRep already
            repeated.push(nums[i]) // put it in repeated
        } else if (nonRep.indexOf(nums[i]) === -1){
            // if its not in nonRep array then push
            // in nonRep array
            nonRep.push(nums[i])
            
            
        } 
        
    }
    return nonRep.splice(3,3)
}

console.log(singleNumber([4, 3, 2, 4, 1, 3, 2]))
//                        r  r  r  r  N  r  r




// function singleNumber(arr) {
//     arr.sort((a,b) => a-b)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1] && arr[i + 1] !== arr[i + 2]){
//             return arr[i + 1]
//         }
//     }
    
// }
// console.log(singleNumber([4, 3, 2, 4, 1, 3, 2]))













// function singleNumber(nums) {
//     let repeated = []
//     let nonRep = []

//     for (let i = 0; i < nums.length; i++) {
//         if ((repeated.indexOf(nums[i]) === -1)) { // if it is in there already

//             for (q = 1; q < nums.length; q++){
//                 if(nums[i] === nums[q]){
//                     repeated.push(nums[i])
//                 }
//                 else if(nums[i] !== nums[q]){
//                     nonRep.push(nums[i])
//                 }
//             }
//         }
//     }
//     return nonRep
// }

// console.log(singleNumber([4, 3, 2, 4, 1, 3, 2]))