function pivotInteger(n: number): number {
    for(let i=1;i<=n;i++){
        let count1 : number = 0;
        for(let j=1;j<=i;j++){
            count1+= j;
        }
        let count2 : number = 0;
        for(let j=n;j>=i;j--){
            count2+= j ;
        }
        if(count1 === count2){
            return i;
        }
    }
    return -1;
};