// Write a function that takes in a string and replaces all vowels with an underscore '_'

// for example 
// "sad" => "s_d"
// "hello" => "h_ll_"
// "testing" => "t_st_ng"


function replace(string) {
    let newStr = ''
    // console.log(newStr)
    for (letter of string) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            newStr += '_';
        } else {
            newStr += letter
        }
    }
    return newStr;
}

console.log(replace("sad"))
console.log(replace("hello"))
console.log(replace("testing"))
