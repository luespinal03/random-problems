// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// EXAMPLES

// 4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"








function maskify(cc) {
    // If length is greater than 4, then we have things to mask
    if (cc.length > 4) { // if cc.length is more than 4
        // reverse string
        let reversed = reverse(cc); // reversed it used so when we are replacing numbers with #'s, the #'s begin from the front until cc.length -4
        let newString = '';
        for (let i = 0; i < reversed.length; i++) {
            // if i < 4, we want to reveal these numbers in our output
            if (i < 4) {
                newString += reversed[i];
                // console.log(newString)
            } else {
                // anything past the 4th index replace it with #
                newString += '#'; // 0198#######
                // console.log(newString) // 0198#######
            }
        }
        // return the reversal of the string to revert it back to original format
        return reverse(newString); // ######8910
    } else { // if cc.length is not more than 4
        return cc;
    }
}



function reverse(str) {
    return str.split("").reverse().join(""); // splits the array, reverses it, puts them back in reversed
}

console.log(maskify("12345678910"))
console.log(maskify("1234"))