//我的提交执行用时
// 已经战胜 50.00 % 的 javascript 提交记录
var fourSum = function(nums, target) {
    let ans = [];
    let len = nums.length;
    if(len < 4) return ans;
    nums.sort(function(a,b){
        return a-b;
    });
    let targetArr = [];
    for(let i=0;i<len-3;i++){
        let tempTarget = target-nums[i];
        if(targetArr.includes(tempTarget)){
            continue;
        }
        targetArr.push(tempTarget);
        let threeRes = threeSum1(nums.slice(i+1),tempTarget);
        if(threeRes.length !== 0){
            for(let j=0;j<threeRes.length;j++){
                threeRes[j].unshift(nums[i]);
            }
            ans.push(...threeRes);
        }
    }
    return ans;
};

var threeSum1 = function(nums,s) {
    let ans = [];
    let len = nums.length;
    let target = [];
    for(let i=0;i<len-2;i++){
        let tempTarget = s-nums[i];
        if(target.includes(tempTarget)){
            continue;
        }
        target.push(tempTarget);
        let j = i+1;
        let k = len-1;
        while(j<k){
            let sum = nums[j]+nums[k];
            if(sum > tempTarget){
                k--;
                while(k>j && nums[k+1]===nums[k]){ //如果有相同的数则跳过 
                    k--;
                }
            }else if(sum < tempTarget){
                j++;
                while(k>j && nums[j-1]===nums[j]){//如果有相同的数则跳过 
                    j++;
                }
            }else if(sum === tempTarget){
                let tempAns = [nums[i],nums[j],nums[k]];
                ans.push(tempAns);
                k--;
                j++;
                while(k>j && nums[k+1]===nums[k] && nums[j-1]===nums[j]){//如果有相同的数则跳过 
                    k--;
                    j++;
                }
            }
        }
    }
    return ans;
};

let nums = [-1,-5,-5,-3,2,5,0,4];
let target = -7;
console.log(fourSum(nums,target));