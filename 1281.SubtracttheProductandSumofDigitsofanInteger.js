/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const nStr=n.toString();
    let product=1;
    let sum =0;
    for(let i=0;i<nStr.length;i++){
        product *= Number(nStr[i]);
        sum += Number(nStr[i]);
    }
    return product-sum;
};