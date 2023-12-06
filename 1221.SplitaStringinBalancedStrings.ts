function balancedStringSplit(s: string): number {
    let countR : number =0;
    let countL : number =0; 
    let output : number =0;
    for(let i=0; i<s.length;i++){
        if(s[i]=== "R"){countR++;} 
        else {countL++;} 
        if(countL===countR){
            output++;
        }
    }
    return output;
};