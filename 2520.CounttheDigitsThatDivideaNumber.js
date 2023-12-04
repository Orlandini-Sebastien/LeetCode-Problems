/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let res=0;
    let strNum = num.toString();
    for(let i=0;i<strNum.length;i++){
        if(num%Number(strNum[i]) == 0){
           res++;
           }
    }
    return res;
};