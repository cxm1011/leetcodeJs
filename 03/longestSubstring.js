
//"abcabcbb" ，没有重复字符的最长子串是 "abc"
//给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。
//给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
//已经战胜 93.26 % 的 javascript 提交记录
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    if(len == 0 || len == 1){
        return len;
    }
    let maxSubStr = '';   //定义最长子串
    let subStr = ''; //临时存储子串
    let repeatLoc = 0;  //定义重复位置
    for(let char of s){
        if(subStr.includes(char)){
            repeatLoc = subStr.indexOf(char);
            subStr = subStr.slice(repeatLoc+1);
        }
        subStr += char;
        if(subStr.length > maxSubStr.length){
            maxSubStr = subStr;
        }
    }
    return maxSubStr.length;
};
console.log(lengthOfLongestSubstring('jbpnbwwd'));