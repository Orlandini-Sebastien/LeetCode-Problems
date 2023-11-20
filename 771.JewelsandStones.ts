function numJewelsInStones(jewels: string, stones: string): number {
    let result : number =0;
    for(let i=0;i<jewels.length;i++){
        for(let j=0;j<stones.length;j++){
            if(jewels[i]=== stones[j]){
                result++;
            }
        }
    }
    return result++;
};