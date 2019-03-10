//执行用时 : 140 ms, 在Find Peak Element的JavaScript提交中击败了3.03% 的用户
// 内存消耗 : 34.2 MB, 在Find Peak Element的JavaScript提交中击败了0.00% 的用户
var findPeakElement = function(nums) {
    // let len = nums.length;
    // if(len === 0) return null;
    // if(len === 1) return nums[0];
    // let max = 0;
    // for(let i = 0;i<len;i++){
    //     if(i === 0) {
    //         max = Math.max(nums[0],nums[1]);
    //         continue;
    //     }
    //     if(i === len-1 && nums[i-1]>nums[i-2]){
    //         max = Math.max(max,nums[i-1]);
    //         continue;
    //     }
    //     if(nums[i] > nums[i-1] && nums[i] >nums[i-2]){
    //         max = Math.max(max,nums[i]);
    //     }
    // }
    // return max;
    if(nums.length == 1) {
        return 0;
    }
    let i = 0;
    for(; i < nums.length - 1; i++) {
        // 增量为负，说明过了峰值，开始减少
        if(nums[i + 1] - nums[i] < 0) {
            return i;
        }
    }
    return i;
};
let arr = [1,2,1,3,5,6,4];
console.log(findPeakElement(arr));