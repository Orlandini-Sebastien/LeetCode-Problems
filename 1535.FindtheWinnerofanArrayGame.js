/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    if(k>=arr.length){
        let max =0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>max){
                max =arr[i];
            }
        }
        return max;
    }
    let win =0;
    while (win != k){
        if(arr[0]>arr[1]){
            let permute = arr[1];
            arr[1]=arr[0];
            arr[0]= permute;
            arr.push(arr.shift());
            win++;
        } else {
            arr.push(arr.shift());
            win=1;
        }
    }
    return arr[0];
};