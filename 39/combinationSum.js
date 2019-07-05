//执行用时 :104 ms  在所有 JavaScript 提交中击败了97.27% 的用户
//内存消耗 :36.8 MB, 在所有 JavaScript 提交中击败了71.93% 的用户
var combinationSum = function(candidates, target) {
    let res = [];
    let tempRes = [];
    let length = candidates.length;
    let temp = 0;
    candidates.sort((a,b) => {
      return a - b > 0
    });
    res = getRes (candidates, temp, res, tempRes,target, 0, length)
    return res;
};

function getRes (arr, temp, res, tempRes,target, i, length) {
  if(temp === target) {
    res.push(JSON.parse(JSON.stringify(tempRes)));
  }
  if(temp > target) {
    return;
  }
  for(let j = i; j < length; j++) {
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
let candidates = [2,3,5], target = 8;
let res = combinationSum(candidates, target);