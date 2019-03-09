
//

// 执行用时 : 136 ms, 在Single Number的JavaScript提交中击败了37.73% 的用户
// 内存消耗 : 36.9 MB, 在Single Number的JavaScript提交中击败了0.98% 的用户
// var singleNumber = function(nums) {
//     nums.sort();
//     for(let i=0;i<nums.length-1;i=i+2){
//         if(nums[i] !== nums[i+1]){
//             return nums[i]
//         }
//     }
//     return nums[nums.length-1];
// };


//执行用时 : 144 ms, 在Single Number的JavaScript提交中击败了35.53% 的用户
// 内存消耗 : 35.1 MB, 在Single Number的JavaScript提交中击败了0.98% 的用户
var singleNumber = function(nums) {
    let res = 0;
    for(let i=0;i<nums.length;i++){
        res ^= nums[i]
    }
    return res;
};
let arr = [4,1,2,1,2];
console.log(singleNumber(arr));