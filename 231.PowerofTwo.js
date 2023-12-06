/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for(let i=0;i<31;i++){
        if(n == 2**i  ){
        return true;
        }
    }
    return false;
};