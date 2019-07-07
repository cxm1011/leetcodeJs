// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

//我们交换数字 a[i-1]a[i−1] 和 a[j]a[j]。我们现在在索引 i-1i−1 处有正确的数字。 但目前的排列仍然不是我们正在寻找的排列。我们需要通过仅使用 a[i-1]a[i−1]右边的数字来形成最小的排列。 因此，我们需要放置那些按升序排列的数字，以获得最小的排列。
// 但是，请记住，在从右侧扫描数字时，我们只是继续递减索引直到我们找到 a[i]a[i] 和 a[i-1]a[i−1] 这对数。其中，a[i] > a[i-1]a[i]>a[i−1]。因此，a[i-1]a[i−1] 右边的所有数字都已按降序排序。此外，交换 a[i-1]a[i−1] 和 a[j]a[j] 并未改变该顺序。因此，我们只需要反转 a[i-1]a[i−1] 之后的数字，以获得下一个最小的字典排列。

// 比当前数大一点的数怎么排？
// eg: 1 5 8 4 7 6 5 3 1  ->  1, 5, 8, 5, 1, 3, 4, 6, 7
// i从数组尾端开始遍历，比较i与i-1大小，找到第一个arr[i-1] < a[i]时的i，这样交换arr[i-1]与arr.splice(i)数组中比arr[i-1]大一点的值,然后将arr.splice(i)生序排序。最后将
// arr.splice(0,i)与生序后的数组组合在一起即可。
// 注意下当前值是最大值情形。
var nextPermutation = function(nums) {
    let len = nums.length;
    let i = len - 1;
    while(i > 0 && nums[i] <= nums[i-1]) {
      i--;
    }
    if(i > 0) {
      let locJ = getJ(nums, i);
      swap(nums, i-1 ,locJ);
      let sortNums = nums.slice(i);
      console.log('sortNums', sortNums);
      sortNums.sort((a,b) => {
        return a-b;
      });
      return [...nums.slice(0,i),...sortNums]
    } 
    if(i === 0) {
      return nums.sort((a,b) => {
        return a-b;
      });
    }
};

function getJ(nums, i) {
  let len = nums.length;
  for(let j = len-1;j>=i;j--){
    if(nums[j] > nums[i-1]) {
      return j;
    }
  }
  return i;
}

function swap(nums,i,j){
  let temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
}

// let nums = [1,5,8,4,7,6,5,3,1];
// let nums = [4,3,2,1];
let nums = [1,3,2];
let res = nextPermutation(nums);
console.log('res', res);