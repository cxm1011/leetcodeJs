//成功
// 显示详情 
// 执行用时: 156 ms, 在Unique Paths II的JavaScript提交中击败了11.86% 的用户
// 内存消耗: 35.2 MB, 在Unique Paths II的JavaScript提交中击败了0.00% 的用户
// 注意当i = 0和j=0情形
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    if(obstacleGrid[0][0] === 1) return 0;
    let arr = new Array(m);
    for(let i = 0;i < m;i++){
        arr[i] = new Array(n);
    }
    for(let i = 0;i < m;i++){
        for(let j = 0;j < n;j++){
            if(obstacleGrid[i][j] === 1) {
                arr[i][j] = 0;
                continue;
            }
            if(i === 0 ){
                if(j-1 > 0 && arr[i][j-1] === 0){
                    arr[i][j] = 0;
                } else{
                    arr[i][j] = 1;
                }
               
            } else if(j === 0 ){
                if(i-1 > 0 && arr[i-1][j] === 0){
                    arr[i][j] = 0;
                } else{
                    arr[i][j] = 1;
                }
               
            } else {
                arr[i][j] = arr[i-1][j] + arr[i][j-1];
            } 
        }
    }
    return arr[m-1][n-1];
};

let arr = [[0,1,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
console.log(uniquePathsWithObstacles(arr));