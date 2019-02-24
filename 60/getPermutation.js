// 参考第46题
var getPermutation = function(n, k) {
    let ans = [];
    let temp = '';
    ans = findAns(ans,temp,n);
    return ans[k];
};

function findAns(ans,temp,n,k){
    if(temp.length === n){
        ans.push(temp); 
        return ans;
    }
    for(let i=1;i<=n;i++){
        if(temp.includes(i)){
            continue;
        }
        temp += i;
        ans = findAns(ans,temp,n);
        if(ans.length === k) return ans;
        temp = temp.substring(0,temp.length - 1);
    }
    return ans;
}

getPermutation(9,1);