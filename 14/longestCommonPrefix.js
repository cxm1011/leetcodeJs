//已经战胜 14.94 % 的 javascript 提交记录
//方法：外层遍历字符串中的值，内层遍历每一个字符串。一一比较，为空或者不相等返回。注意输入数组为空情况
//复杂读: 时间复杂度O(n^2)
var longestCommonPrefix = function(strs) {
    let ans = '';
    let len = strs.length;
    if(len === 0) return ans;  // 注意数组为空情况
    let len1 = strs[0].length;
    for(let i=0;i<len1;i++){
        for(let j=0;j<len;j++){
            if(!strs[j][i] || strs[j][i] !== strs[0][i]){
                return ans;
            }
        }
        ans += strs[0][i];
    }
    return ans;
};

let strs = [];
console.log(longestCommonPrefix(strs));