//我的提交执行用时
//已经战胜 12.43 % 的 javascript 提交记录
//方法: 字符串从小到大外循环遍历，内循环从大到小遍历。算出中间位置，然后依次对比大位置和小位置的字符是否相等，直到小位置处于中间位置
//经过这循环后大位置减1，小位置还是外循环的小位置，继续循环。
//复杂度： 循环两次，加上中间比较的while循环。所以O(n^3)

var longestPalindrome = function(s) {
    let longest="";
    if(s == null || s == '') return "";
    let len = s.length;
    longest = s.charAt(0);
    for(let min=0; min<len && (len-min+1>longest.length); min++){
        let tempMIn = min;
        for(let max = len-1;max>min && (max-min+1 > longest.length);max--){
            let middle = (max-tempMIn)%2 != 0?parseInt((max-tempMIn)/2)+min:(max-tempMIn)/2-1+min; // 注意中间位置计算，需要加上min
            let tempMax = max;
            while(tempMIn <= middle){
                if(s.charAt(tempMIn) === s.charAt(tempMax)){
                    tempMIn++;
                    tempMax--;
                }else{
                    break;
                }
            }
            if(tempMIn-1 ===  middle && (max-min+1) > longest.length){
                longest = s.slice(min,max+1);
            }
            tempMIn = min;  // 注意需要重新给小位置赋值。因为tempMin在循环中可能已经改了
        }
    }
    return longest;
};
console.log(longestPalindrome("dsfsdfsd"));