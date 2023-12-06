/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches=0;
    if(n==1) return 0;
    if(n==2) return 1;
    while(n !=2){
        if(n%2===0){
            matches+= n/2;
            n/=2;
        }
        else {
            matches+= (n-1)/2;
            n=(n-1)/2+1;
        }
    }
    matches++;
    return matches;
};