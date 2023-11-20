/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    nums2=[];
    for(let j=0;j<2;j++){
        for(let i=0; i<nums.length;i++){
            nums2.push(nums[i]);
        }
    }  
    return nums2;
};
