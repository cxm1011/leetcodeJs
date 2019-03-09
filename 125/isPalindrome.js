//执行用时 : 116 ms, 在Valid Palindrome的JavaScript提交中击败了47.89% 的用户
// 内存消耗 : 38.7 MB, 在Valid Palindrome的JavaScript提交中击败了0.85% 的用户
var isPalindrome = function(s) {
    if(s === null || s.length === 1) return true;
    let len = s.length;
    let reg = /[a-z0-9]{1}/;
    let arr = [];
    s = s.toLowerCase();
    for(let i=0;i<len;i++){
        console.log(s.charAt(i));
        if(reg.test(s.charAt(i))){
            arr.push(s.charAt(i))
        }
    }
    let mid = parseInt(len/2)-1;
    for(let i=0;i<=mid;i++){
        if(arr[i] !== arr[arr.length-1-i]){
            return false;
        }
    }
    return true;
};
let s="0P";
console.log(isPalindrome(s));