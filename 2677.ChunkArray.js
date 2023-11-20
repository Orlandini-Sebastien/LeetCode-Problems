/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let finalArr=[];
    for(let i=0; i<arr.length/size;i++){
        let chunkArr=[];
        for(let j=i*size;j<size*i+size;j++){
            if(arr[j]!= undefined)chunkArr.push(arr[j]);
        }
        finalArr.push(chunkArr);
    }
    return finalArr;
};
