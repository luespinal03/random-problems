// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:


function anagrams(word, wordsArr) {
    let checkingArr = [];
    let answer = [];
    let wordSplit = word.split("").sort().join("");

    for (let i = 0; i < wordsArr.length; i++) {
        checkingArr = wordsArr[i].split("").sort().join("");
        console.log("WORDSPLIT:");
        console.log(wordSplit);
        console.log("CHECKINGARR:");
        console.log(checkingArr);
        if (checkingArr === wordSplit) {
            answer.push(wordsArr[i]);
        }
    }
    return answer;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb','bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])) // []




// let answer = '';
// let anagram = word.toString().split("") //.join("");
// let splitArray = wordsArr.split("").sort().join("");
// //  splitWord = word.split("");
// // let splitArray = words.split("");
// // return splitWord;
// console.log("this is anagram");
// console.log(anagram);
// console.log("this is splitArray");
// console.log(splitArray);
// // console.log(secondAnagram);

// for (let i = 0; i < anagram.length; i++) {
//     // console.log(anagram);
//     for (let j = 0; j < splitArray.length; j++) {
//         // console.log("thi is splitArray");
//         // console.log(splitArray);
//         if (anagram[i] === splitArray[j]) {
//             answer += (splitArray[j]);
//         }
//     }

// }
// return answer;




// for (let j = 0; j < splitArray.length; j++) {
//     checkerArr = splitArray[j].split("").join("");
//     console.log("This is checkerArr")
//     console.log(checkerArr);
//     for (let i = 0; i < anagram.length; i++) {
//         if (checkerArr === anagram) {
//             answer.push(checkerArr)
//             console.log("This is whas inside answer");
//             console.log(answer);
//         }
//     }

// }



/* PSEUDO CODE

1. Split first parameter by letters

2. Compare every letter from FIRST parameter to every letter in every index place of SECOND parameter


*/