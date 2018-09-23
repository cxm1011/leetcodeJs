// 已经战胜 70.56 % 的 javascript 提交记录
// 解决思路：定义左括号数组left和右括号数组right。遍历字符串s,如果值为左括号中的值，则入栈，如果为右括号中的值，则
//          栈顶元素出栈，并判断该值和栈顶元素是否为一对(这里使用了是否在数组中的位置一致判断)。不是一对，则返回false.一对，则
//          栈顶指针减1，继续遍历。最后判断栈顶指针是否为0即可。
// 复杂度分析： 时间复杂度：O(n)  空间复杂度: O(n)

function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
    this.dataStore[--this.top];
}
function peek(){
    return this.dataStore[this.top-1];
}
function length(){
    return this.top;
}
function clear(){
    this.top = 0;
}
var isValid = function(s) {
    if(s.length === 0) return true;
    let stack = new Stack();
    let left = ['(','[','{'];
    let right = [')',']','}'];
    for(let val of s){
        if(left.includes(val)){
            stack.push(val);
        }
        if(right.includes(val)){
            let peekVal = stack.peek();
            if(left.indexOf(peekVal) === right.indexOf(val)){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.top === 0;
};
let s = '()'
console.log(isValid(s));

