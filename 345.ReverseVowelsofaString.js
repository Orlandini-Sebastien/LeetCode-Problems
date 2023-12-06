/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let consonant = [];
    let vowels = [];
    for(let i=0;i<s.length;i++){
        if(s[i]==="a" || s[i]==="e" || s[i]==="i" || s[i]==="o" || s[i]==="u" ||
           s[i]==="A" || s[i]==="E" || s[i]==="I" || s[i]==="O" || s[i]==="U"){
            vowels.push(s[i]);
            consonant.push(null);
        }else{
            consonant.push(s[i]);
        }
    }
    let newWord=[];
    for(let i=0;i<s.length;i++){
        if(consonant[i]!==null){
            newWord.push(consonant[i]);
        } else {
            newWord.push(vowels.pop());
        }
    }
    return newWord.join("");
};