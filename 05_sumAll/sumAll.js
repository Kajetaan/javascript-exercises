const sumAll = function (numb, second_number) {


    if (typeof numb !== "number" ||
        typeof second_number !== "number" ||
        !Number.isInteger(numb) ||
        !Number.isInteger(second_number) ||
        numb < 0 ||
        second_number < 0) {
        return "ERROR";
    }

    let start = Math.min(numb, second_number);
    let finish = Math.max(numb, second_number);

    let sum = 0;
    while (start <= finish) {
        sum += start;
        start++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
