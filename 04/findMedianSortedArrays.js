// 已经战胜 18.43 % 的 javascript 提交记录
//思路：合并数组，取中间值
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    if(len1 === 0 && len2 === 0) return 0;
    let middle = parseInt((len1+len2)/2);
    let index1 = 0;
    let index2 = 0;
    let index = 0;
    let all = [];
    while(index1 < len1 && index2 < len2 && index<=middle){
        if(nums1[index1] <= nums2[index2]){
            all[index] = nums1[index1];
            index1++;
        }else{
            all[index] = nums2[index2];
            index2++;
        }
        index++;
    }
    while(index1 === len1 && index <= middle){
        all[index] = nums2[index2];
        index2++;
        index++;
    }
    while(index2 <= len2 && index <= middle){
        all[index] = nums1[index1];
        index1++;
        index++;
    }
    if((len1+len2)%2){
        return all[middle];
    }else{
        return (all[middle]+all[middle-1])/2.0;
    }

};

let nums1 = [1,3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1,nums2));