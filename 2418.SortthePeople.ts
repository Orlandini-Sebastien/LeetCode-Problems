function sortPeople(names: string[], heights: number[]): string[] {
    let obj : any = {};
    for(let i=0;i<heights.length;i++){
        obj[heights[i]] = names[i];
    }
    heights.sort((a,b)=>b-a);
    for(let i=0;i<heights.length;i++){
        names[i]= obj[heights[i]];
    }
    return names;
};