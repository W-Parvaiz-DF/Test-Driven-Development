const { assertEquals, countEvenNumbers } = require('../test-framework');

//Acceptance criteria 1

const testArray1 = () => {
    //Setup 
    let input = [1, 2, 3, 4, 5, 6];
    let expectedOutput = 3;
    //Execute
    let actualOutput = countEvenNumbers(input);
    //Verify
    let result = assertEquals(expectedOutput, actualOutput);
    console.log(result);
};
//Acceptance criteria 2

const testArray2 = () => {
    //Setup
    let input = [0, 1, 2];
    let expectedOutput = 2;
    //Execute
    let actualOutput = countEvenNumbers(input);
    //Verify
    let result = assertEquals(expectedOutput, actualOutput);
    console.log(result);
};

//Acceptance criteria 3
const testArray3 = () => {
    //Setup
    let input = [1, 3, 5];
    let expectedOutput = 0;
    //Execute
    let actualOutput = countEvenNumbers(input);
    //Verify
    let result = assertEquals(expectedOutput, actualOutput);
    console.log(result);
};


module.exports = { testArray1, testArray2, testArray3 };

