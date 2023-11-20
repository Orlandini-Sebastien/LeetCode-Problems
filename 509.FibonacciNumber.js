/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0) return 0;
    if(n==1) return 1;
    let u0=0;
    let u1=1;
    let f=[];
    for(let i=1;i<n;i++){
        f=u1+u0;
        u0=u1;
        u1=f;
    }
    return f; 
};