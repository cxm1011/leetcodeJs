
//已经战胜 91.93 % 的 javascript 提交记录
//方法:先将数组排序，第一个数下标i从数组第0个数循环到倒数第二个数，第二个数下标j=i+1,第三个数下标k=len-1.求和，作差，
//差大于0，k--,差小于0，j++,等于0，返回target。比较差值与之前存储最小值(使用abs方法)，若差值更小，更新最小值和sum.
//复杂度:时间复杂度O(n^2)

var threeSumClosest = function(nums, target) {
    let len = nums.length;
    let min = null;
    if(len<3) return min;
    if(len === 3) return nums[0]+nums[1]+nums[2];
    nums.sort(function(a,b){
        return a-b;
    })
    let minArr = [];
    for(let i=0;i<len-2;i++){
        let j=i+1;
        let k=len-1;
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            let temp = sum-target;
            if(temp>0){
                k--;
            }else if(temp<0){
                j++;
            }else{
                return target;
            }
            //注意这里需要用abs
            if(minArr.length === 0 || Math.abs(temp)<Math.abs(minArr[0])){
                minArr[0] = temp;
                minArr[1] = sum;
            }
        }
    }
    min = minArr[1];
    return min;
};
let nums = [-1,2,1,-4];
console.log(threeSumClosest(nums,1));
