function count(string) {
    let newStr = string.split("");
    let obj = {};

    for (let i = 0; i < newStr.length; i++) {
        if (typeof obj[newStr[i]] !== 'undefined') {
            // if newStr[i] is not in obj then it goes into obj and add 1 as the value
            obj[newStr[i]] += 1;
        } else {
            // if it is in there already add  1 to w.e the value it has already 
            obj[newStr[i]] = 1;

        }
    }
    return obj;
}

console.log(count('aba'));