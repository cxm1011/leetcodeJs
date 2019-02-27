//
// 执行用时: 148 ms, 在Plus One的JavaScript提交中击败了6.50% 的用户
// 内存消耗: 33.6 MB, 在Plus One的JavaScript提交中击败了0.66% 的用户

var plusOne = function(digits) {
    let ans = [];
    let other = 0;
    let num = 0;
    for(let i = digits.length-1; i >= 0; i--){
        if(i === digits.length-1) {
            num = (digits[i]+1+other)%10;
            other = parseInt((digits[i]+1+other)/10);
        }else{
            num = (digits[i]+other)%10;
            other = parseInt((digits[i]+other)/10);
        }
        ans.push(num);
    }
    if(other != 0) {
        ans.push(other);
    }
    let revertAns = [];
    for(let i = ans.length-1; i >= 0; i--){
        revertAns.push(ans[i]);
    }
    return revertAns;
};
let digits = [9,9,9];
console.log(plusOne(digits));