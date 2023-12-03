function minTimeToVisitAllPoints(points: number[][]): number {
    let time:number=0;
    for(let i=0;i<points.length-1;i++){
        let dx : number = Math.abs(points[i+1][0]-points[i][0]);
        let dy : number = Math.abs(points[i+1][1]-points[i][1]);
        if(dx === dy){
            time+=dx;
        }
        if(dx > dy){
            time+= dx;
        }
         if(dx < dy){
            time+= dy;
        }
    }
    return time;
};