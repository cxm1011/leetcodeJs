
// 超时
// var climbStairs = function(n) {
//     if(n === 1) return 1;
//     if(n === 2) return 2;
//     return climbStairs(n-1)+climbStairs(n-2);
// };


//
// 执行用时: 88 ms, 在Climbing Stairs的JavaScript提交中击败了30.31% 的用户
// 内存消耗: 33.7 MB, 在Climbing Stairs的JavaScript提交中击败了0.00% 的用户
var climbStairs = function(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    let ans = [];
    ans[0] = 1;
    ans[1] = 2;
    for(let i = 2;i<n;i++){
        ans[i] = ans[i-1]+ans[i-2];
    }
    return ans[n-1];
};

console.log(climbStairs(3));