const reverseString = function(str) {
    return str.split('').reverse().join('');
};

/* Below, a more verbose yet still fully functional approach
to this function.

const reverseString = function(str) {
    const letters = [];
    for (let i = 0; i <= str.length; i++) {
        letters.push(str.charAt(str.length-i));
    }

    let reversedText = '';
    for (const letter of letters) {
        reversedText += letter;
    }

    return reversedText;
}; */

// Do not edit below this line
module.exports = reverseString;
