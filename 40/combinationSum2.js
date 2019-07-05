// 执行用时 :212 ms, 在所有 JavaScript 提交中击败了17.51%的用户
// 内存消耗 :37.5 MB, 在所有 JavaScript 提交中击败了34.61%的用户
var combinationSum2 = function(candidates, target) {
  let res = [];
  let tempRes = [];
  let length = candidates.length;
  let temp = 0;
  candidates.sort((a,b) => {
    return a - b ;
  });
  res = getRes (candidates, temp, res, tempRes,target, -1, length);
  return res;
};

function getRes (arr, temp, res, tempRes,target, i, length) {
  if(temp === target && !isRepeat(res,tempRes)) {
    res.push(JSON.parse(JSON.stringify(tempRes)));
  }
  if(temp > target) {
    return;
  }
  for(let j = i+1; j < length; j++) {
    temp += arr[j];
    tempRes.push(arr[j]);
    getRes (arr, temp, res, tempRes,target, j, length);  // 这里不用写成res = getRes (arr, temp, res, tempRes,target, j, length);因为上面的if返回中没有返回res
    if(tempRes.length > 0) {
      tempRes.pop();
      temp -= arr[j];
    }
  }
  return res;
}

function isRepeat (res, tempRes) {
  for(let i = 0, len = res.length; i < len; i++) {
    if(JSON.stringify(res[i]) === JSON.stringify(tempRes)) {
      return true;
    }
  };
  return false;
}

let candidates = [5,4,5,1,5,3,1,4,5,5,4], target = 10;
let res = combinationSum2(candidates, target);
console.log(res);