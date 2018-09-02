// let str = 'abbcde';
// console.log(str.slice(1))
// console.log(str.indexOf('b'));
// for(let index in str){
//     console.log(index);
// }
// console.log(parseInt(3/2));
// console.log(str.charAt(4));
// console.log(str.substring(0,3));

// let dp = new Array();
// for(let i=0;i<2;i++){
//     dp[i] = new Array();
//     for(let j=0;j<2;j++){
//         dp[i][j] = 0;
//     }
// }
// console.log(dp);

let str = 'abcde';
console.log(str.split(''));
console.log(str.charAt(2));
console.log(str.slice(2,3));

let temp = str;
let strs = str.split('')
strs[4] = temp.charAt(0);
strs[0] = temp.charAt(4);
console.log(strs);

let num = 123;
let strNum = num.toString();
console.log(strNum.split(''));
let strArr = strNum.split('');
 console.log(['a','b','c'].join(''));
 console.log(Math.abs(001));