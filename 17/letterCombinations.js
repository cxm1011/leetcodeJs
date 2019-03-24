//成功
// 显示详情 
// 执行用时 : 132 ms, 在Letter Combinations of a Phone Number的JavaScript提交中击败了8.56% 的用户
// 内存消耗 : 33.8 MB, 在Letter Combinations of a Phone Number的JavaScript提交中击败了0.00% 的用户

var letterCombinations = function(digits) {
    let digitsArr = digits.split('');
    if(digitsArr.length === 0) return [];
    let str = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let strArr = [];
    for(let i=0;i<digitsArr.length;i++){
        strArr.push(str[digitsArr[i]-2]);
    }
    let temp = [];
    let res = [];
    let max = strArr.length;
    res = getRes(strArr,0,temp,res,max);
    return res;
};

function getRes(strArr,i,temp,res,max){
    if(temp.length === max){
        res.push(JSON.parse(JSON.stringify(temp)).join(''));
        return res;
    }
    let oneStr = strArr[i].split('');
    for(let j=0;j<oneStr.length;j++){
        temp.push(oneStr[j]);
        res = getRes(strArr,i+1,temp,res,max);
        temp.pop();
    }
    return res;
}

let digits = '';
console.log(letterCombinations(digits));