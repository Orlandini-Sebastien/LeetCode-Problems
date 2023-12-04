/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let num2= num.toString().split("").sort().map(a=>Number(a));
    
    return num2[0]*10+num2[1]*10+num2[2]+num2[3];
};