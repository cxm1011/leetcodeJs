// 注意比较的tempMax，tempMin，nums[i]
// 这三个值都有可能是临时最大值，或者临时最小值
var maxProduct = function(nums) {
    if(nums.length === 0) return -1;
    let iMax = 1;
    let iMin = 1;
    let max = nums[0];
    for(let i = 0,len = nums.length;i < len ; i++) {
      let tempMax = iMax * nums[i];
      let tempMin = iMin * nums[i];
      iMax = Math.max(nums[i], tempMax, tempMin);
      iMin = Math.min(nums[i], tempMin, tempMax);
      max = Math.max(max, iMax);
    }
    return max;
};
// let arr = [2,3,-2,4];
let arr = [-2,3,-4];
let res = maxProduct(arr);
console.log(res);
console.log(Math.max(1,2,3));