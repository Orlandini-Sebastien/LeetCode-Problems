/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n===1){return true;}
    let bool=false;
     for(let i=0; i<31;i++){
        if(Math.round(n**(1/i)*10000)/10000=== 4) {bool= true;} 
    }  
    return bool;
 };