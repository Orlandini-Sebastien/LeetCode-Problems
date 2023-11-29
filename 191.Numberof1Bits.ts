function hammingWeight(n: number): number {
    let arr:string[]= n.toString(2).split("");
    return arr.filter(a=>a=="1").length;
};