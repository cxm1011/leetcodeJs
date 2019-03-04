
// 执行用时: 92 ms, 在Best Time to Buy and Sell Stock的JavaScript提交中击败了65.33% 的用户
// 内存消耗: 35.5 MB, 在Best Time to Buy and Sell Stock的JavaScript提交中击败了5.30% 的用户
var maxProfit = function(prices) {
    let len = prices.length;
    if(len <= 1) return 0;
    let max = 0;
    let min = prices[0];
    for(let i=1;i<len;i++){
        max = Math.max(prices[i]-min,max);
        min = Math.min(prices[i],min);
    }
    return max;
};
let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));