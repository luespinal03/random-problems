function twoSmallest(banana) {
    let smallestNumber = 100;
    let largestNumber = 0;
    let secondSmallestNumber = smallestNumber;
    let restOfArray = []
    let answers = [];

    if (banana.length < 2) {
        return 'undefined';
    }
    // finds the smallest number
    for (let i = 0; i < banana.length; i++) {

        if (banana[i] < smallestNumber) {
            smallestNumber = banana[i];
        } else {
            restOfArray.push(banana[i]);
        }
    }

    // finds the largest number
    for(let i = 0; i < banana.length; i++){
        if (banana[i] > largestNumber) {
            largestNumber = banana[i];
        } else {
            restOfArray.push(banana[i]);
        }
    }


    // finds the middle number
    for(let i = 0; i < restOfArray.length; i++){
        if(restOfArray[i] === largestNumber && restOfArray[i] === smallestNumber){
            continue; 
        } else if(restOfArray[i] < largestNumber && restOfArray[i] > smallestNumber){
            secondSmallestNumber = (restOfArray[i]);
        }
    }
    answers.push(smallestNumber)
    answers.push(secondSmallestNumber);
    return answers;

}

console.log(twoSmallest([10, 2, 6, 7, 5])) // 2,5

