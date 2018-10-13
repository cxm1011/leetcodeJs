//已经战胜 20.44 % 的 javascript 提交记录
//解决思路： 先通过二分法找到与target相等的位置，然后再分别找到与出现最早的位置和最晚的位置
//时间复杂度: O(logn)

var searchRange = function(nums, target) {
    let len = nums.length;
    if(len === 0) return [-1,-1];
    let left = 0;
    let right = len-1;
    let mid = left + parseInt((right-left)/2);
    while(mid<=len-1 && mid>=0 && left<right && nums[mid] !== target){
        if(nums[mid] > target){
            right = mid-1;
        }else if(nums[mid] < target){
            left = mid+1;
        }else{
            break;
        }
        mid = left + parseInt((right-left)/2);
    }
    if(nums[mid] === target){
        let min = mid;
        let max = mid;
        while(min >= 0 && nums[min] === target){
            min--;
        }
        while(max <= len-1 && nums[max] === target){
            max++;
        }
        return [min+1,max-1];
    }else{
        return [-1,-1];
    }
};
let nums = [5,7,7,8,8,10];
let target = 6;
console.log(searchRange(nums,target));
