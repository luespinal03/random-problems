function toCamelCase(str) {
    let splittedStr = str.split("")
    let newStr = ""

    for (i = 0; i < str.length; i++) {

        if (splittedStr[i] === splittedStr[i].toUpperCase()) {
            splittedStr[i] = splittedStr[i].toUpperCase()
        }

        if (splittedStr[i] === "-" || splittedStr[i] === "_") {
            // if the index is "-" or "_" 

            splittedStr[i] = "" // change it into nothing ""
            newStr = newStr + splittedStr[i] // update newStr
            splittedStr[i + 1] = splittedStr[i + 1].toUpperCase() // the index right next to "" index, make it capital

            // if(splittedStr[i] === splittedStr[i].toUpperCase()){
            //     splittedStr[i] = splittedStr[i].toUpperCase()
            // }

        } else {
            newStr = newStr + splittedStr[i]
        }
    }
    return newStr
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("Yo-mama_works"))






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