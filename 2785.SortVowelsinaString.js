/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = [];
    for(let i=0; i<s.length;i++){
        if(s[i].match(/[aeiou]/i)){
            vowels.push(s[i]);
        }
    }
    vowels.sort();
    let output="";
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[aeiou]/i)){
            output+= vowels[count];
            count++;
        } else{
            output+= s[i];
        }
    }
  return output;
};