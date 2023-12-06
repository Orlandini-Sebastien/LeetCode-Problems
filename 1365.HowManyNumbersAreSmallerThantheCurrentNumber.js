/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
    let count=0;
    let result=[];
    for(let i=0;i<nums.length;i++){
        count=0;
        for(let j=0;j<nums.length;j++){
            if(i!=j && nums[i] > nums[j]){
                count++;   
            }
        }
        result.push(count);
    }
    return result;
};