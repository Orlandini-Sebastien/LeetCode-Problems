/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let bool=false; 
    let count=1;
    for(let i=0;i<50;i++){
        if(count === n){
            bool=true;
            break;
        }
        count *=3;
    }
    return bool;
};