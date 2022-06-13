// students score, total positive score
// 15-20 --> you got a C (75%!)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-50





function gradeCalc(score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ' '

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }


    return `You got a (${percent}%) ${letterGrade}!`
}

let result = gradeCalc(8, 10) // score you got and max score
console.log(result)



///////////////////////////////////



// let square = function (num) {
//     let result = num * num
//     return result
// }

// let value = square(3)
// let otherValue = square(10)

// console.log(value)
// console.log(otherValue)