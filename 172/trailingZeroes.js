//执行用时 : 164 ms, 在Factorial Trailing Zeroes的JavaScript提交中击败了8.38% 的用户
// 内存消耗 : 33.8 MB, 在Factorial Trailing Zeroes的JavaScript提交中击败了0.00% 的用户
var trailingZeroes = function(n) {
    let num = 0;
    let k = 1;
    let m = Math.pow(5,k);
    while(m <= n){
        num += parseInt(n/m);
        k++;
        m = Math.pow(5,k);
    }
    return num;
};
console.log(trailingZeroes(10));