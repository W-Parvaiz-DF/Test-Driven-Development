const assertEquals = (actual, expected) => actual === expected;

const countEvenNumbers = array => {
    let count = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count += 1;
        };
    };
    return count;
}

module.exports = { assertEquals, countEvenNumbers }
