function leftRightDifference(nums: number[]): number[] {
    let output: number[] = [];
    let rightSum : number[]=[];
    let sumleft: number=0;
    let sumright: number=0;

    for(let i=0;i<nums.length;i++){
        sumright+= nums[nums.length-1-i];
        rightSum.push(sumright);
    }   
    console.log(rightSum);
    for(let i=0;i<nums.length;i++){
        sumleft+=nums[i];
        output.push(Math.abs(rightSum[rightSum.length-1-i]-sumleft));
    }
    return output;
};