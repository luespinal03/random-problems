romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let s = "DCXXI" // 1994 
//      50, 5, 3  

function romanToInt(s) {
    let tab = 0;


    for (let i = 0; i < s.length; i++) {

        if (s[i] === "I" && s[i + 1] === "V") {
            tab += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            tab += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            tab += 40;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            tab += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            tab += 400;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            tab += 900;
            i++;
        } else {
            tab += romanNums[s[i]];
        }
    }
    return tab;
}

console.log(romanToInt(s))