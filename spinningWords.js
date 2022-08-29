function spinWords(string) {
    str = string.split(" ")
    let newStr = []
    // console.log(newStr)

    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            str[i].split('').reverse().join('')
            newStr.push(str[i].split('').reverse().join(''))
        } else {
            newStr.push(str[i])
        }
    }
    return newStr.join(' ')

}
// reverse words with 5 or more letters
console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Just kidding there is still one more"));
console.log(spinWords("Seriously this is the last one"));