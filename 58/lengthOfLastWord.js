//执行用时: 92 ms, 在Length of Last Word的JavaScript提交中击败了28.16% 的用户
// 内存消耗: 14.6 MB, 在Length of Last Word的JavaScript提交中击败了0.00% 的用户

// 思路： 先使用trim方法去除首尾空格，使用split方法转为字符串数组。取最后一个即可
var lengthOfLastWord = function(s) {
    s = s.trim();
    let sArr = s.split(' ');
    if(sArr.length != 0){
        let last = sArr[sArr.length - 1];
        return last.length;
    } else {
        return 0;
    }
};
let str = "a ";
console.log(lengthOfLastWord(str));