// 我的提交执行用时
// 已经战胜 17.84 % 的 javascript 提交记录
//方法: 利用动态规划方法。i依次遍历字符串，j从0开始遍历小于i的字符。规则
// 1） 当i==j  dp[i][j] = 1;  
// 2) 当i=j+1  dp[i][j] = (s[i] === s[j])
// 3) 当i>j+1  dp[i][j] = (s[i] === s[j] && s[i-1][j+1])
//复杂度： 时间复杂度O(n^2)  空间复杂度O(n^2)


var longestPalindrome = function(s) {
    let longest="";
    if(s == null || s == '') return "";
    let len = s.length;
    // 创建二维数组，设置初始值为0
    let dp = new Array();
    for(let i=0;i<len;i++){
        dp[i] = new Array();
        for(let j=0;j<len;j++){
            dp[i][j] = 0;
        }
    }
    longest = s[0];

    for(let i = 0;i < len;i++){
        for(let j = 0;j < i;j++){
            if(i === j){
                dp[i][j] = 1;
            }
            if(i === j+1 && s.charAt(i) === s.charAt(j)){
                dp[i][j] = 1;
            }
            if(i > j+1 && s.charAt(i) === s.charAt(j) && dp[i-1][j+1] === 1){
                dp[i][j] = 1;
            }
            if(dp[i][j] === 1 && (i-j+1) > longest.length){
                longest = s.slice(j,i+1);  //因为不包括右侧的数字对应的值，所以需要i+1
            }
        }
        dp[i][i] = 1; // 这个不能少，因为有可能 dp[i-1][j+1]为此处。eg: 'abcdc',当i=3时，如果没有dp[3][3]=1,则当i=4，j=2时，
                        //，值相等，然后i-1=3，j+1=3.所以dp[3][3]的值会影响到dp[4][2]的结果
    }
   
    return longest;
};
console.log(longestPalindrome("a"));