function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
    let time : number = arrivalTime + delayedTime;
    if (time >=24){
        time -=24;
    }
    return time;
};