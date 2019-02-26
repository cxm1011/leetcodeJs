// 超时
// var minPathSum = function(grid) {
//     let m = grid.length;
//     let n = grid[0].length;
//     let min = Number.MAX_VALUE;
//     let s = 0;
//     return getMinSum(grid,m,n,0,0,s,min)
// };

// function getMinSum(grid,m,n,i,j,s,min){
//     if(i === m-1 && j === n-1 ){
//         s += grid[i][j];
//         return Math.min(s,min);
//     }
//     if(i < m-1){
//         s += grid[i][j];
//         if(s < min){
//             min = getMinSum(grid,m,n,i+1,j,s,min);
//             s -= grid[i][j];
//         }
//     } 
//     if(j < n-1){
//         s += grid[i][j];
//         if(s < min){
//             min = getMinSum(grid,m,n,i,j+1,s,min)
//         }
//     }
//     return min;
// }


//  
// 成功
// 显示详情 
// 执行用时: 100 ms, 在Minimum Path Sum的JavaScript提交中击败了46.63% 的用户
// 内存消耗: 36.3 MB, 在Minimum Path Sum的JavaScript提交中击败了0.00% 的用户
var minPathSum = function(grid) {
    if(grid === null || grid.length === 0 || grid[0] === null || grid[0].length === 0) {
        return 0;
    }
    let row = grid.length;
    let col = grid[0].length;
    let arr = new Array(row);
    for(let i = 0;i < row; i++){
        arr[i] = new Array(col);
    }
    arr[0][0] = grid[0][0];
    for(let i = 1;i < row; i++){
        arr[i][0] = arr[i-1][0] + grid[i][0];
    }
    for(let j = 1;j < col; j++){
        arr[0][j] = arr[0][j-1] + grid[0][j];
    }
    for(let i = 1;i < row;i++ ){
        for(let j = 1;j < col;j++ ){
            arr[i][j] =Math.min(arr[i-1][j],arr[i][j-1]) + grid[i][j];
        }
    }
    return arr[row-1][col-1];
};


let arr = 
[
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
  console.log(minPathSum(arr));