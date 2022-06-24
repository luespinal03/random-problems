function createPhoneNumber(numbers) {
    let newArray = ''

    for (let i = 0; i < numbers.length; i++) {
        newArray = newArray + "(" + numbers[0] + numbers[1] + numbers[2] + ")" + " " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]
        return newArray
    }
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


// Another way of doing it


// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   }