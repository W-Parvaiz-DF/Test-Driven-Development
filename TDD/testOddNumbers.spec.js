const { countOddNumbers } = require(`./sourceOddNumbers`);



const testCountOddNumbersInArrayOfOne = arr => {

    //Identify
    console.log(`testCountOddNumbersInArrayOfOne \n ================== \n `);

    //Arrange
    const testArray = [3];
    const expectedOutput = 1;

    //Act
    const actualOutput = countOddNumbers(testArray);

    //Assert
    const result = (actualOutput === expectedOutput);

    //Report
    console.log(`testCountOddNumbersInArrayOfOne result: ${result}`);

};

const testCountOddNumbersInArrayOfTwo = arr => {

    //Identify
    console.log(`testCountOddNumbersInArrayOfTwo \n ================== \n `);

    //Arrange
    const testArray = [3, 5];
    const expectedOutput = 2;

    //Act
    const actualOutput = countOddNumbers(testArray);

    //Assert
    const result = (actualOutput === expectedOutput);

    //Report
    console.log(`testCountOddNumbersInArrayOfTwo result: ${result}`);

};


const testCountOddNumbersInArrayOfArb = arr => {

    //Identify
    console.log(`testCountOddNumbersInArrayOfArb \n ================== \n `);

    //Arrange
    const testArray = [3, 5, 6, 7, 8, 9, 11, 100, -57];
    const expectedOutput = 6;

    //Act
    const actualOutput = countOddNumbers(testArray);

    //Assert
    const result = (actualOutput === expectedOutput);

    //Report
    console.log(`testCountOddNumbersInArrayOfArb result: ${result}`);

};



const testCountOddNumbersInArrayOfEvens = arr => {
    console.log(`testCountOddNumbersInArrayOfEvens \n ================== \n `);

    //Arrange
    const testArray = [2, 4];
    const expectedOutput = 0;

    //Act
    const actualOutput = countOddNumbers(testArray);

    //Assert
    const result = (actualOutput === expectedOutput);

    //Report
    console.log(`testCountOddNumbersInArrayOfEvens result: ${result}`);


};




module.exports = {
    testCountOddNumbersInArrayOfOne,
    testCountOddNumbersInArrayOfTwo,
    testCountOddNumbersInArrayOfArb,
    testCountOddNumbersInArrayOfEvens
};




