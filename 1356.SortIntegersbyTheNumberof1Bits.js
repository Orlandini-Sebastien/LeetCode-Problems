/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr=arr.map(a=>a.toString(2));
    newArr=[];
    totNum=arr.length;
    let j=0;
    while(totNum>0){
        let arrBis=[];
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i].split("").reduce((a,b)=>Number(a)+Number(b),0) ===j){
                arrBis.push(arr[i]);
                totNum--;
                count++;
            }
        }
        if(count!=0){
           newArr.push(arrBis); 
        }

        j++;
    }
    for(let i=0; i<newArr.length;i++){
        for(let j=0;j<newArr[i].length;j++){
           newArr[i][j]=parseInt(newArr[i][j],2);
        }
        newArr[i].sort((a,b)=>a-b);
    }
    let newStr= newArr.toString().split(",");
    if(newStr[0]== "") newStr.shift();
    if(newStr[newStr.length-1]=="") newStr.push();
    newStr=newStr.map(a=>Number(a));
    return newStr;
};