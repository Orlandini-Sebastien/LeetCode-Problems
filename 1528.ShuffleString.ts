function restoreString(s: string, indices: number[]): string {
    let obj : any ={};
    let str : string ="";
    for(let i=0;i<indices.length;i++){
        obj[indices[i]] = s[i];
    }
    for(let i=0;i<indices.length;i++){
        str+= obj[i];
    }
    return str;
};