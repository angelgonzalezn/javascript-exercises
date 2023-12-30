const removeFromArray = function(arr, ...args) {
    return arr.filter((value) => !args.includes(value));
}

/* Below, first version of this function. It passed all tests,
but it may not work if we need to exclude one value that appears
multiple times in the array.

const removeFromArray = function(arr, ...args) {
    for (const value of args) {
        let index = arr.indexOf(value);
        if (index < 0) continue;
        arr.splice(index, 1);
    }
    return arr;
}; */

// Do not edit below this line
module.exports = removeFromArray;
