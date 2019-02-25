// 超时
// var uniquePaths = function(m, n) {
//     let pathNum = 0;
//     pathNum = getPathNum(0,0,m,n,pathNum);
//     return pathNum;
// };

// function getPathNum(x,y,m,n,p){
//     if(y < n-1) p = getPathNum(x,y+1,m,n,p);
//     if(x < m-1) p = getPathNum(x+1,y,m,n,p);
//     if(x === m-1 && y === n-1) p++;
//     return p;
// }

// 2.右下角次数 = 左边+上边次数
// 执行用时: 96 ms, 在Unique Paths的JavaScript提交中击败了29.41% 的用户
// 内存消耗: 35.1 MB, 在Unique Paths的JavaScript提交中击败了0.00% 的用户
// var uniquePaths = function(m, n) {
//     let arr = new Array(m);
//     for(let i=0;i<arr.length;i++){
//         arr[i] = new Array(n);
//     }
//     for(let i = 0;i < m;i++){
//         for(let j = 0;j < n;j++){
//             if(i === 0 || j === 0){
//                 arr[i][j] = 1;
//             } else {
//                 arr[i][j] = arr[i-1][j] + arr[i][j-1];
//             } 
//         }
//     }
//     return arr[m-1][n-1];
// };


// 3.走到右下角行数走m-1行，列走n-1列，共走m+n-2步。在m+n-2中选择m-1步
// 执行用时: 108 ms, 在Unique Paths的JavaScript提交中击败了17.65% 的用户
// 内存消耗: 14.6 MB, 在Unique Paths的JavaScript提交中击败了0.00% 的用户
var uniquePaths = function(m, n) {
    if(m < 1 || n < 1 ) return 0;
    let sum = m+n-2;
    let line = m-1;
    return mul(sum,line)/jiecheng(line);
};

function mul(x,time){
    let res = 1;
    let end = x - time +1;
    for(let i=x;i>=end;i--){
        res *= i;
    }
    return res;
}

function jiecheng(x){
    let res = 1;
    for(let i=1;i<=x;i++){
        res *= i;
    }
    return res;
}

console.log(uniquePaths(2,3));