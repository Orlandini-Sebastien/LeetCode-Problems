/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    let maxLeft=0;
    let minRight=100000;
    for(let i=0;i<left.length;i++){
        if(left[i]>maxLeft){
            maxLeft=left[i];
        }
    }
    for(let i=0;i<right.length;i++){
        if(right[i]<minRight){
            minRight=right[i];
        }
    }
    let distance1=maxLeft;
    let distance2=n-minRight;
    if(distance1>distance2){
        return distance1;
    } else {
        return distance2;
    }
};