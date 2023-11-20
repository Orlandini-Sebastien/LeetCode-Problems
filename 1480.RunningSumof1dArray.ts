function runningSum(nums: number[]): number[] {
    let output : number[]=[];
    let sum : number =0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        output.push(sum);
    }
    return output;
};