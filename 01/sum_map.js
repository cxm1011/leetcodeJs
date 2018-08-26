//已经战胜 35.93 % 的 javascript 提交记录
//时间复杂度O(n)
var nums = [3,2,4];
var target = 6;
var twoSum = function (nums, target) {
    var arr = [];
    var map = new Map();
    var len = nums.length;
    for(var i=0;i<len;i++){
        var other = target-nums[i];
        if(map.has(other)){
            arr.push(map.get(other),i);
            break;
        }
        map.set(nums[i],i);
    }
    return arr;
}
twoSum(nums,target);
console.log(twoSum(nums,target));