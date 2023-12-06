/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let countP=0;
    let countM=0;
    let countG=0;
    let rootG = false;
    let rootM=false;
    let rootP=false; 
    let totalTime=0;
    let travelTime= travel.reduce((a,b)=> a+b,0);
    for(let i=0;i<garbage.length;i++){
        countG = (garbage[garbage.length-1-i].match(/G/g) || []).length;
        countP = (garbage[garbage.length-1-i].match(/P/g) || []).length;
        countM = (garbage[garbage.length-1-i].match(/M/g) || []).length;

        totalTime += countG + countP + countM;

        if(i != 0 ) travelTime= travelTime - travel[travel.length-i]; 

        if (countG >0 && rootG == false){
            rootG=true;
            totalTime+=travelTime;
        }
        if (countM >0 && rootM == false){
            rootM=true;
            totalTime+=travelTime;
        }
        if (countP >0 && rootP == false){
            rootP=true;
            totalTime+=travelTime;
        }

    }
    return totalTime;
};