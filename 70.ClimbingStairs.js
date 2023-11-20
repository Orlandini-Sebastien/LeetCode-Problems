/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==0) return 1;
    if(n==1) return 1;
    if(n==2) return 2; 
    let u1= 1; 
    let u2= 2; 
    let un=0;
    for(let i=2;i<n;i++){
        un= u1 + u2;
        u1= u2;
        u2=un;
    }
    return un;
};