function sumIndicesWithKSetBits(nums: number[], k: number): number {
    let output : string[]=[];
    let sum : number=0;
    for(let i=0;i<nums.length;i++){
        output.push(i.toString(2));
    }
    for(let i=0;i<output.length;i++){
        let count : number =0;
        for(let j=0; j<output[i].length;j++){
            if(output[i][j]==="1")
            count++;
        }
        if(count === k){
            sum+=nums[i];
        }
    }
    return sum;
};