
var divide = function(dividend, divisor) {
    let flag = 1; 
    if((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)){
        flag = -1;
    }
    let ans = 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while(divisor <= dividend){
        ans++;
        dividend -= divisor;
    }
    ans *= flag;
    if(ans > Math.pow(2,31) - 1){
        return Math.pow(2,31) - 1
    }
    return ans;
};
console.log(divide(-2147483648
    -1,-1));