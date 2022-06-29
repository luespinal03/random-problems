function truncate(str) {
    let newStr = ""

    for (let i = 0; i < 15; i++) {
        if (str[i] > 15) {
            newStr = newStr //+ "..."
        } else {
            newStr = newStr + str[i]
        }  
    }
    return newStr + "..."
}
//                                   |
console.log(truncate("This problem sucks major butt."))
console.log(truncate("Well, that's just, like, your opinion man."))
//                                   |



