/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rows=[];
    rows.push([1]);
    rows.push([1,1]);
    if(numRows==1) return [[1]];
    if(numRows==2) return [[1],[1,1]];
    for(let j=2;j<numRows;j++){
        let row=[1];
        for(let i=0;i<rows[rows.length-1].length-1;i++){
            row.push(rows[rows.length-1][i]+rows[rows.length-1][i+1]);
            }
        row.push(1);
        rows.push(row);
    }
    return rows;
};