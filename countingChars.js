function count(string) {
    let newStr = string.split("");
    let obj = {};
    for (let i = 0; i < newStr.length; i++) {
        if (typeof obj[newStr[i]] !== 'undefined') {
            obj[newStr[i]] += 1;
        } else {
            obj[newStr[i]] = 1;
        }
    }
    return obj;
}

console.log(count('aba'));