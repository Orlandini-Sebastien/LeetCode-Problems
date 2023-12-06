/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum=nums.reduce((a,b)=>a+b,0);
    let digSum= nums.join("").toString().split("").map(a=>Number(a)).reduce((a,b)=>a+b,0);
    return Math.abs(sum-digSum);
};