/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let max=0;
    if(word1.length> word2.length){ max=word1.length;}
    else{max=word2.length;}
    
    let newStr="";
    for(let i=0;i<max;i++){
        if(i<word1.length && i<word2.length){
            newStr=newStr+word1[i]+word2[i];
        }
        else if(i<word1.length && i>=word2.length){
            newStr=newStr+word1[i];
        }
        else if(i>=word1.length && i<word2.length){
            newStr=newStr+word2[i];
        }
    }
    return newStr;
};