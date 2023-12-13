function diagonalSum(mat: number[][]): number {
    let output: number=0;
    for(let i=0;i<mat.length;i++){
        output+=mat[i][i];
        if(mat.length-1-i !== 0+i){
           output+=mat[mat.length-1-i][0+i]; 
        }
    }
    return output;
};