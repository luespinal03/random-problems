romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}


function romanToInt(s) {
    let tab = 0;


    for (let i = 0; i < s.length; i++) {

        if (s[i] === "I" && s[i + 1] === "V") { // 5 - 1 
            tab += 4;   //next index to the right
            i++; // moves on to the next index
        } else if (s[i] === "I" && s[i + 1] === "X") { // 10 - 1
            tab += 9;  //next index to the right
            i++; // moves on to the next index
        } else if (s[i] === "X" && s[i + 1] === "L") { // 50 - 10
            tab += 40;  //next index to the right
            i++; // moves on to the next index
        } else if (s[i] === "X" && s[i + 1] === "C") { // 100 - 10
            tab += 90;  //next index to the right
            i++; // moves on to the next index
        } else if (s[i] === "C" && s[i + 1] === "D") { // 500 - 100
            tab += 400;  //next index to the right
            i++; // moves on to the next index
        } else if (s[i] === "C" && s[i + 1] === "M") { // 1000 - 100
            tab += 900;  //next index to the right
            i++; // moves on to the next index
        } else {
            tab += romanNums[s[i]];  // if nothing hits, log the number into tab
        }
    }
    return tab;
}

let s = "DCXXI"
console.log(romanToInt(s))