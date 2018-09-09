//我的提交执行用时
//已经战胜 19.39 % 的 javascript 提交记录
//方法： 先初始化左右两个指针，要使面积最大，只能移动较小数的指针，这样才有可能获得较大的面积。
//        刚开始想的是比较左右指针相邻数，移动相邻数会增大的指针。这样会漏掉两个大数邻着的情况。【2，3，4，5，18，17，6】
//复杂度： 时间复杂度O(n)
var maxArea = function(height) {
    let len = height.length;
    let left = 0;
    let leftNum = 0;
    let right = len-1;
    let rightNum = 0;
    let tempMax = 0;
    let max = 0;
    let min = 0;
    while(left < right){
        leftNum = height[left];
        rightNum = height[right];
        min = Math.min(leftNum,rightNum);
        tempMax = min*(right-left);
        max = Math.max(tempMax,max);
        if(height[left] > height[right]){
            right--;
        }else if(height[left] < height[right]){
            left++;
        }else{
            left++;
            right--;
        }
    }
    return max;
};
console.log(maxArea([1,3,2,5,25,24,5]));