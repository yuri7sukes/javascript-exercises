const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    finalString = ''
    for (let i = 0; i < num; i++) {
        finalString += string
    }
    return finalString
};
console.log(repeatString('asd', 2))

// Do not edit below this line
module.exports = repeatString;
