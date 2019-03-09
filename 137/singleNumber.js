//
// 执行用时 : 212 ms, 在Single Number II的JavaScript提交中击败了13.74% 的用户
// 内存消耗 : 35.8 MB, 在Single Number II的JavaScript提交中击败了0.00% 的用户
var singleNumber = function(nums) {
    nums.sort();
    for(let i=0;i<nums.length-2;i=i+3){
        if(nums[i] !== nums[i+1]){
            return nums[i]
        }
    }
    return nums[nums.length-1];
};