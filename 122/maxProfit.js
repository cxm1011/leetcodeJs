//执行用时: 164 ms, 在Best Time to Buy and Sell Stock II的JavaScript提交中击败了6.98% 的用户
// 内存消耗: 35.3 MB, 在Best Time to Buy and Sell Stock II的JavaScript提交中击败了0.67% 的用户
// 贪心算法  保证每一步利润最大 则总利润最大
var maxProfit = function(prices) {
    let len = prices.length;
    if(len <= 1) return 0;
    let max = 0;
    for(let i=1;i<len;i++){
       if(prices[i] - prices[i-1] > 0){
          max += prices[i] - prices[i-1]
       }
    }
    return max;
};
let prices = [1,2,3,4,5];
console.log(maxProfit(prices));