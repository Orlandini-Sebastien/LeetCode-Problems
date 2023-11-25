function maximum69Number (num: number): number {
    let arr : string[] = num.toString().split("");
    let index : number = arr.indexOf("6");
    arr[index]="9";
    return Number(arr.join(""));
};