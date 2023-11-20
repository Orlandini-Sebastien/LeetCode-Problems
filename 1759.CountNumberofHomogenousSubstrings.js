/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let M = 1000000007;
    // Create array of substring
    let subStr="";
    let subStrs=[];
    for(let i=0;i<s.length;i++){
        subStr= subStr + s[i];
        if(s[i]!==s[i+1]) {
            subStrs.push(subStr);
            subStr=subStr.replace(subStr,"");
        }
    }

    let output=0;
    for(let i=0;i<subStrs.length;i++){
        let sum=0;
        for(let j=1;j<subStrs[i].length+1;j++){
            sum=sum + j;
        }  
        output+=sum;
    }
    return output%M;
};