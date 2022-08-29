function filter_list(l) {
    let newArray = []
    let newString = ''

    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === 'number') {
            newArray.push(l[i])
        } else {
            newString += l[i]
        }
    }
return newArray
}

console.log(filter_list([1, 2, 'a', 'b'])) // expected output [1,2]
console.log(filter_list([1, 'a', 'b', 0, 15])) // expected output [1,0,15]
console.log(filter_list([1, 2, 'asf', '1', '123', 123])) // expected output [1,2,123]