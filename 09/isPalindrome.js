// 我的提交执行用时
// 已经战胜 97.34 % 的 javascript 提交记录
// 方法： 先将数字转字符串，再依次比较头和尾，有不相等即返回false
// 复杂度： 时间复杂度O(n)

var isPalindrome = function(x) {
    let xStr = x.toString();
    let len = xStr.length;
    if(len === 1) return true;
    let mid = len%2 === 0 ?len/2: parseInt(len/2);
    for(let i=0;i<mid;i++){
        if(xStr[i] !== xStr[len-1-i]){
            return false;
        }
    }
    return true;
};
console.log(isPalindrome(1));