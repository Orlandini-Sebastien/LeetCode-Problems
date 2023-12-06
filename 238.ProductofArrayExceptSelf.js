/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let _temp = []
    for(let i=0;i<nums.length;i++){
        let _prod = 1;
        for(let j=0;j<nums.length;j++){
            if(i != j){
                _prod *= nums[j];
            }
        }
        _temp.push(_prod);
    }
    return _temp;
};
    
