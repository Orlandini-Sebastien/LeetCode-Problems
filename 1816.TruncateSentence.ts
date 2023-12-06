function truncateSentence(s: string, k: number): string {
    let array : string[]= s.split(" ");
    let array2 : string[]=[];
    for(let i=0;i<array.length;i++){
        if(i<k){
            array2.push(array[i]);
        } else break;
    }
    return array2.join(" ");
};