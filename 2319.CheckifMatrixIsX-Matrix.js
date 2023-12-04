/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    for(let i=0; i<grid.length;i++){
        for(let j=0; j<grid.length;j++){
            if(i === j){
                if(grid[i][j]===0) return false; 
            }
            if(i === grid.length-1-j){
                if(grid[i][j]===0) return false;
            }
            if(i !== j && i!==grid.length-1-j){
                if(grid[i][j]!==0) return false;
            }
        }
    } 
     return true;
 };