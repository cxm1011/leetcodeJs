
//我的提交执行用时
//已经战胜 77.79 % 的 javascript 提交记录
//时间复杂度O(n)
var nums = [3,2,4];
var target = 6;
var twoSum = function (nums, target) {
    var arr = [];
    var temp = [];
    var len = nums.length;
    for(var i=0;i<len;i++){
        var other = target-nums[i];
        if(temp.includes(other)){
            arr.push(temp.indexOf(other),i);
            break;
        }
        temp.push(nums[i]);
    }
    return arr;
}
twoSum(nums,target);
console.log(twoSum(nums,target));