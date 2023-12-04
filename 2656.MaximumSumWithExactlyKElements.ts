function maximizeSum(nums: number[], k: number): number {
    let add:number = Math.max(...nums);
    let sum:number=0; 
    for (let i=0;i<k;i++){
        if(i!==0)add+=1;
        sum+=add
    }
    return sum;
};