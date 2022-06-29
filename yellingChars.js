function yellingChars(str) {
    let newStr = ""

    for(let i = 0; i < str.length; i++){
    newStr = newStr + "!" + str[i] 
}

    return newStr
}

console.log(yellingChars("goodness"))
console.log(yellingChars("oh hello"))