
//已经战胜 66.78 % 的 javascript 提交记录
//时间复杂度O(n^2)  暴力解法
var nums = [2, 7, 11, 15];
var target = 9;
var twoSum = function (nums, target) {
    var arr = [];
    var len = nums.length;
    for(var i=0;i<len;i++){
        arr = [];
        arr.push(i);
        for(var j=i+1;j<len;j++){
            if(nums[j] === target-nums[i]){
                arr.push(j);
                break;
            }
        }
        if(arr.length == 2){
            break;
        }
    }
    return arr;
};
console.log(twoSum(nums,target));