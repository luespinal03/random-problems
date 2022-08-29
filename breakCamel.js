// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let newStr = ''
    // console.log(newStr)
    for (letter of string) {
        if (letter === letter.toUpperCase()){
            newStr += ' ';
            newStr += letter;
        } else {
            newStr += letter
        }
    }
    return newStr;
}

// function solution(s) {
//     const re = /[A-Z]/g;
//     // [A-Z] is a pattern to be used to look for a range of characters that start with a capitalized letter A-Z. You use brackets to group the characters in a set. Without the brackets, our regular expression will only look for A, -, and Z. g is an expression flag g is for global. Global means it will find matches in the entire string or text instead of stopping at the first very first occurrence of a match.
//     let wordSplit = s.split(re);
    
//     return wordSplit;
    
//   }

console.log(solution("camelCasing"))
console.log(solution("identifier"))
console.log(solution(""))