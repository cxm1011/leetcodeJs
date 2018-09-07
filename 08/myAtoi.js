//已经战胜 97.93 % 的 javascript 提交记录
//方法： 使用trim方法先将前面空格去除，再遍历每一个字符。第一个字符为符号则保存，之后字符判断是否为数字，不是则退出
//复杂度： 时间复杂度O(n)

var myAtoi = function(str) {
    let str1 = str.trim();
    let flag = null;
    let numStr = "";
    let num;
    let len = str1.length;
    let max = Math.pow(2,31)-1;
    let min = -1* Math.pow(2,31);
    for(let i=0;i<len;i++){
        if(i === 0 && (str1[i] === '+' || str1[i] === '-' )){
            flag = str1[i];
        }else if(parseInt(str1[i]) >= 0 && parseInt(str1[i]) <= 9){
            numStr += str1[i]
        }else{
            break;
        }
    }
    if(!numStr){
        return 0;
    }
    num = parseInt(numStr);
    if(flag === '-'){
        num = -1*num;
    }
    if(num >= max){
        return max;
    }else if(num <= min){
        return min;
    }else{
        return num;
    }
};

console.log(myAtoi('-91283472332'));