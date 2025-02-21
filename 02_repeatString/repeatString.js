const repeatString = function (str, nmb) {
    let modified_str = "";
    if (nmb < 0) {
        modified_str = "ERROR";
    } else {
        for (let i = 0; i <= nmb - 1; i++) {
            modified_str = modified_str + str;
        }
    }


    return modified_str;
};

// a comment
// Do not edit below this line
module.exports = repeatString;
