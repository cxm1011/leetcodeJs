//我的提交执行用时
//已经战胜 97.03 % 的 javascript 提交记录
//思路：先将数字取绝对值后转字符串，再转为字符数组。循环字符数组，交换两头值，直到中间位置。最后输出时候注意三点
// 1）超出范围数字返回0   2）注意原来值的正负  3) 使用abs去除数字前面的0
// 复杂度: O（n）

var reverse = function(x) {
    if(x === 0) return 0;
    let strX = Math.abs(x).toString();  // 数字转字符串
    let xArr = strX.split(''); // 转字符数组
    let len = xArr.length;
    let mid = parseInt(len/2);
    for(let i=0;i<mid;i++){
        exchange(xArr,i,len-1-i);
    }
    let ans = Math.abs(xArr.join(''));  //abs目的去除数字前面的0
    if(ans > Math.pow(2,31)-1) return 0;
    if(x<0) return ans*-1;
    else return ans;

};

var exchange = function(arr,min,max){
    let temp = arr[min];
    arr[min] = arr[max];
    arr[max] = temp;
}

console.log(reverse(000));