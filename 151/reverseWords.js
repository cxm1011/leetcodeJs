// 
var reverseWords = function(s) {
  let sArr = s.split('');
  let len = sArr.length;
  let res = [];
  for(let i=0;i<len;i++) {
    let temp = '';
    while(i < len && sArr[i] !== " ") { // 注意是" " 不是 ' '
      temp += sArr[i];
      i++;
    }
    if(temp !== '') {  // push时候注意控制一下，空格不能进行push
      res.push(temp)
    }
  }
  let resLen = res.length;
  let resStr = "";
  for(let i = resLen - 1;i >= 0; i--) {
    resStr += " " + res[i];
  }
  return resStr.substr(1);
};

let s = "a good   example";
let s1 = reverseWords(s);
console.log(s1);