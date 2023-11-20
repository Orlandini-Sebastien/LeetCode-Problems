function eliminateMaximum(dist: number[], speed: number[]): number {
    
    // Times of monsters sorted
    let times : number[] =[];
    for(let i = 0 ; i< dist.length ; i++ ){
        times.push(dist[i]/speed[i]);
    }
    times = times.sort((a,b)=>a-b);

    // Shoot and charge
    let countDeaf: number =0;
    while (times[0]>0 && times.length>0){
        // Kill the monster
        countDeaf++;
        times.shift();

        // Reduce time by one
        for(let j=0;j<times.length;j++){
                times[j]--;
            }
        }
   return countDeaf;
};