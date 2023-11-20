function maximumWealth(accounts: number[][]): number {
    let max : number = 0;
    for(let i=0; i<accounts.length;i++){
        let sum : number = 0;
        for(let j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j];
        }
        if(sum> max){
            max = sum;
        }
    }
    return max;
};