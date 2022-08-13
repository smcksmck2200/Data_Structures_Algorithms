/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    
    s = s.toLowerCase()
    let newString = s.replace(/[^a-z0-9]/gi, '')
    for (let i = 0; i < Math.floor(newString.length / 2); i++) {
        let length = newString.length - i - 1
        if (newString[i] !== newString[length]) {
            return false
        }
    }
    return true
};
//convert strings to lowercase
//remove all non-alphanumeric characters
//
//loop through array? check if beginning char. is == to last char. and continue through string
//