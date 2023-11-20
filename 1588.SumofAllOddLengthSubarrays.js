/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum=0;
    let j=0;
    while(arr.length-j>0){
        for(let i=0;i<arr.length-j;i++){
            for(let k=i;k<=i+j;k++){
                sum+=arr[k]
            }
        }
        j+=2;
    }
    return sum;
};