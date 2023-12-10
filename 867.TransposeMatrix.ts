function transpose(matrix: number[][]): number[][] {
    const row : number = matrix.length;
    const col : number = matrix[0].length;
    const transpose : number[][] = new Array(col).fill(0).map(() => new Array(row).fill(0));
    for (let i = 0; i < row; i++) 
        for (let j = 0; j < col; j++) 
            transpose[j][i] = matrix[i][j];
    return transpose;
};