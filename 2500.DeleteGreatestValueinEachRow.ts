function deleteGreatestValue(grid: number[][]): number {
    let output : number =0;
    for(let i=0;i<grid.length;i++){
        grid[i].sort((a,b)=>a-b);
    }
  
    while(grid[0].length){
        let mat : number[]=[];
        let num : number | undefined ;
        for(let i=0;i<grid.length;i++){
        num = grid[i].pop();
        if(num !== undefined) mat.push(num);
      }
    output += Math.max(...mat); 
    }
        
    return output;
};