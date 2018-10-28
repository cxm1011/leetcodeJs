//在Search Insert Position的JavaScript提交中击败了38.09% 的用户
//思路：通过indexOf方法找到位置，若不存在，则通过二分法找最后比较的位置,根据最后比较位置值与target的大小返回该插入的位置
//复杂度：时间复杂度O(logn)
var searchInsert = function(nums, target) {
    const loc = nums.indexOf(target);
    if(loc!= -1){
        return loc;
    }
    let len = nums.length;
    let left = 0;
    let right = len-1;
    var mid;
    while(left < right){
        var mid = left + parseInt((right-left)/2);
        if(nums[mid] > target){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    if(nums[left] > target){
        return left;
    }
    if(nums[left] < target){
        return left+1;
    }
};

let nums = [1,3,5,6];
let target = 6;
console.log(searchInsert(nums,target));
