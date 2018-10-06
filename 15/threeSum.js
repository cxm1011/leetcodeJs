
// 暴力解放超时
var threeSum = function(nums) {
    let ans = [];
    let len = nums.length;
    if(len < 3) return ans;
    nums.sort(function(a,b){
        return a-b;
    });
    for(let i=0;i<len-2;i++){
        for(let j=i+1;j<len-1;j++){
            for(let k=j+1;k<len;k++){
                let sum = nums[i]+nums[j]+nums[k];
                if(sum > 0){
                    break;
                }else if(sum === 0){
                    let tempAns = [nums[i],nums[j],nums[k]];
                    if(!isInArray(tempAns,ans)){
                        ans.push(tempAns);
                    }
                    break;
                }
            }
        }
    }
    return ans;
};


// 已经战胜 76.81 % 的 javascript 提交记录
// 方法：将三位数相加简化成两位数相加。注意重复的判断。
// 时间复杂度: O（n^2）
var threeSum1 = function(nums) {
    let ans = [];
    let len = nums.length;
    if(len < 3) return ans;
    nums.sort(function(a,b){
        return a-b;
    });
    let target = [];
    for(let i=0;i<len-2;i++){
        let tempTarget = 0-nums[i];
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

function isInArray(tempAns,ans){
    let len = ans.length;
    if(len === 0) return false;
    for(let val of ans){
        if(val[0] === tempAns[0] && val[1] === tempAns[1] && val[2] === tempAns[2]){
            return true;
        }
    }
    return false;
}

let nums = [-2,0,0,2,2];
console.log(threeSum1(nums));