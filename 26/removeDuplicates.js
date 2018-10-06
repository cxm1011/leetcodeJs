// 已经战胜 91.38 % 的 javascript 提交记录
// 分析:数组完成排序后，我们可以放置两个指针 slow 和 quick，其中slow 是慢指针，而quick是快指针。
// 当nums[quick] === nums[slow]时，增加j跳过重复项。若不等于，则需将nums[j+1]赋值给nums[i],然后递增i
// 复杂度： 时间复杂度O(n) 空间复杂度O(1)
var removeDuplicates = function(nums) {
    let len = nums.length;
    if(len === 0 || len === 1) return len;
    let slow = 0;
    for(let quick=1;quick<len;quick++){
        if(nums[quick] !== nums[slow]){
            nums[slow+1] = nums[quick];
            slow++;
        }
    }
    return slow+1;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
console.log(nums);