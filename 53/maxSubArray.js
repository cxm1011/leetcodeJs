
//在Maximum Subarray的JavaScript提交中击败了55.09% 的用户
//思路：定义一个temp用来记录nums[i]之前连续数的累加和，如果temp小于0，则需置为0.因为要想连续数组出现最大和，则i位置前的累加和需大于
//0，否则加上去会比当前值小。
//复杂度：时间复杂度：O(n)  
var maxSubArray = function(nums) {
    let max = nums[0];
    let temp = 0;
    let len = nums.length;
    for(let i=0;i<len;i++){
        if(nums[i]+temp <= 0){
            temp = 0;
            max = Math.max(max,nums[i]);  //如果全部是负值，则需比较
        }else{
            temp += nums[i];
            max = Math.max(max,temp);
        }
    }
    return max;
};

let nums = [-2,-3,-1,-5];
console.log(maxSubArray(nums));