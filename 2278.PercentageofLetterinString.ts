function percentageLetter(s: string, letter: string): number {
    let output : number =0;
    for(let i=0; i<s.length;i++){
        if(s[i]=== letter){
            output++;
        }
    }
    return Math.trunc(output/s.length*100);
};