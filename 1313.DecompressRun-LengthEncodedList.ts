function decompressRLElist(nums: number[]): number[] {
    let output : number[]=[];
    for(let i=0; i<nums.length/2+1;i++){
        for(let j=0;j<nums[2*i];j++){
            output.push(nums[2*i+1]);
        }
    }
    return output;
};