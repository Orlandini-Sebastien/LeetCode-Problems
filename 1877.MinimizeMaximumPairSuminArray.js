/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=> a-b);
    let sum = 0;
    let array=[];
    for(let i=0;i<nums.length/2;i++){
        sum = nums[i] + nums[nums.length-1-i];
        array.push(sum);
    }
    return Math.max(...array);
};