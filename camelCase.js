function toCamelCase(str) {
    let splittedStr = str.split("")
    let newStr = ""

    for (i = 0; i < str.length; i++) {

        if (splittedStr[i] === "-" || splittedStr[i] === "_") {

            splittedStr[i] = ""
            newStr = newStr + splittedStr[i]
            splittedStr[i + 1] = splittedStr[i + 1].toUpperCase()

            if(splittedStr[i] === splittedStr[i].toUpperCase()){
                splittedStr[i] = splittedStr[i].toUpperCase()
            }

        } else {
            newStr = newStr + splittedStr[i]
        }

    }
    return newStr
}

console.log(toCamelCase("the-stealth-warrior"))






// for (i = 0; i < str.length; i++) {
//     let splitStr = str.split().join()
//     if (splitStr[i] === "-" || splitStr[i] === "_") {
//         splitStr[i] = ""
//         splitStr[i + 1] = splitStr[i].toUpperCase
//     }
//     return splitStr
// }
// // return splitStr
// }