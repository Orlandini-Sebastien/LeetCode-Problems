/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length==1 && flowerbed[0]===0 ) return true;
    
    let nbFlower=0;
    if(flowerbed[0] ===0 && flowerbed[1] ===0){
        flowerbed[0]=1;
        nbFlower++;
    }
    for( let i=1; i<flowerbed.length-1;i++){
        if(flowerbed[i-1]===0 && flowerbed[i]===0 && flowerbed[i+1]===0){
            flowerbed[i]=1;
            nbFlower++;
        }
    } 
    if(flowerbed[flowerbed.length-1] ===0 && flowerbed[flowerbed.length-2] ===0){
        flowerbed[flowerbed.length-1]=1;
        nbFlower++;
    }
    return nbFlower >= n;
};