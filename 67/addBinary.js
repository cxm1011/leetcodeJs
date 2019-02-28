//执行用时: 148 ms, 在Add Binary的JavaScript提交中击败了10.87% 的用户
// 内存消耗: 36.4 MB, 在Add Binary的JavaScript提交中击败了0.00% 的用户
var addBinary = function(a, b) {
    let arrA = a.split('');
    let arrB = b.split('');
    let lenA = arrA.length;
    let lenB = arrB.length;
    let min = Math.min(lenA,lenB);
    let ans = [];
    let sum = 0;
    let i = 0
    for(i = 0;i<min;i++){
        sum = parseInt(arrA[lenA-1-i])+parseInt(arrB[lenB-1-i]) + sum;
        ans.push(sum%2);
        sum = parseInt(sum/2);
    }
    while(i < lenA){
        sum = parseInt(arrA[lenA-1-i]) + sum;
        ans.push(sum%2);
        sum = parseInt(sum/2);
        i++;
    }
    while(i < lenB){
        sum = parseInt(arrB[lenB-1-i]) + sum;
        ans.push(sum%2);
        sum = parseInt(sum/2);
        i++;
    }
    if(sum != 0 ){
        ans.push(sum);
    }
    let str = '';
    for(let i=ans.length-1;i>=0;i--){
        str += ans[i];
    }
    return str;
};
let a = '1010';
let b = '1011';
console.log(addBinary(a,b))