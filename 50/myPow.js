
// 执行用时 : 92 ms, 在Pow(x, n)的JavaScript提交中击败了48.48% 的用户
// 内存消耗 : 33.8 MB, 在Pow(x, n)的JavaScript提交中击败了0.00% 的用户
var myPow = function(x, n) {
    if(n === 0 ) return 1;
    let flag = 1;
    if(n < 0 ){
        flag = -1;
        n = -1*n;
    }
    let res = 1;
    for(let i = n;i !== 0;i = parseInt(i/2)){
        if(i %2 !== 0){
            res *= x;
        }
        x *= x;
    }
    if(flag === 1) {
        return res;
    }else{
        return 1/res;
    }
};

let x = 2.00000;
let n = -2;
console.log(myPow(x,n));