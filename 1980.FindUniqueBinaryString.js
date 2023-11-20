/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let nums2 = nums.map(a=>parseInt(a,2));
    let output=[];
     for(let i=0; i<nums2.length+1;i++){
        if(nums2.includes(i)) continue;
        output.push (i.toString(2));
        break;
    }
    let min = output[0].length;
    for(let i=min;i<nums2.length;i++){
        output.unshift(["0"]);
    }
    return output.join("");
};