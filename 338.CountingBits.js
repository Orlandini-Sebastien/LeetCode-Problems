/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
    let bin=[];
    for(let i=0;i<n+1;i++){
        let num=(i.toString(2));
        let count=0;
        for(let j=0;j<num.length;j++){
            if(num[j]=="1"){
                count++;
            }
        }
        bin.push(count);
    }
    return bin;
};