//在Permutations的JavaScript提交中击败了76.74% 的用户
//思路：ans是最终返回的结果，temp是循环添加的数据形成的数组，循环添加temp中没有的数，并递归调用本函数，直到temp中数的的个数
//为输入数组的长度。然后将temp中最后一个值推出去，返回上一层递归再调用for循环。直到第一层递归全部结束。注意在拷贝temp时一定要
//进行深拷贝
//复杂度：时间复杂度O(n^2)  空间复杂度：O(n)
var permute = function(nums) {
    let ans = [];
    let temp = [];
    ans = findAns(ans,temp,nums,nums.length);
    return ans;
};

function findAns(ans,temp,nums,length){
    if(temp.length === length){
        ans.push(JSON.parse(JSON.stringify(temp))); // 一定要深拷贝
        return ans;
    }
    for(let i=0;i<length;i++){
        if(temp.includes(nums[i])){
            continue;
        }
        temp.push(nums[i]);
        ans = findAns(ans,temp,nums,length);
        temp.pop();
    }
    return ans;
}

let nums = [1,2,3];
console.log(permute(nums));