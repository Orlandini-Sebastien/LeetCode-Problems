/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.toLocaleLowerCase().replace(/[^a-z0-9]/g,"");
    let inv = s.split("").reverse().join("");
    return inv === s;
};