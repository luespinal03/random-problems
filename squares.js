/* 

num is a Number, it doesnt have a length or indexes so we cant go through it digit by digit in its current Number form

covernt num from NUmber to String so we can work with it digit by digit.

let strNum = String(num) // string cast, converts number to string
strNum = num + ""; // "" + num; // both convert Number to string
9119 - '9119'
strNum[0] = '9'
strNum[1] = '1'


square each digit
and then concatenate

loop to go through each digit (possible with out string version of out number)

*/

function squareDigits(num) {

    let strNum = num + '' // converts num to a string
    let newStr = ''

    for (let i = 0; i < strNum.length; i++) {
        newStr += strNum[i] ** 2 // newStr = newStr + strNum[i] ** 2
    }
    return Number(newStr);
}

console.log(squareDigits(9119))