const countOddNumbers = arr => {

    count = 0;

    arr.forEach(value => {

        if (value % 2 != 0) {
            count += 1;
        }
    }
    )
    return count;

};

module.exports = { countOddNumbers };
