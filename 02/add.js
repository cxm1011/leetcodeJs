/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function LinkedList(){
    let Node = function(val) {
        this.val = val;
        this.next = null;
    }
    let length = 0;
    let head = null;
    this.append = function(element){
        let node = new Node(element);
        let current;
        if(head == null){
            head = node;
        }else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }
    this.toString = function () {
        var current = head,
          string = '';
        while (current) {
          string += current.val + (current.next ? ',' : '');
          current = current.next;
        }
        return string;
    }
    this.display = function(){
        var current = head;
        while(current){
            console.log(current.val+' ');
            current = current.next;
        }
    }
    this.length = function(){
        return length;
    }
    this.head = function(){
        return head;
    }

}
var arr1 = [];
var list1 = new LinkedList();
for(let i = 0;i<arr1.length;i++){
    list1.append(arr1[i]);
}

var arr2 = [];
var list2 = new LinkedList();
for(let i = 0;i<arr2.length;i++){
    list2.append(arr2[i]);
}
 
var addTwoNumbers = function(l1, l2) {
    var res = new LinkedList();
    var len1 = l1.length();
    var len2 = l2.length();
    var minLen = Math.min(len1,len2);
    var head1 = l1.head();
    var head2 = l2.head();
    var temp = 0;
    for(var i=0;i<minLen;i++){
        temp += head1.val+head2.val;
        res.append(temp%10);
        temp = parseInt(temp/10);

        head1 = head1.next;
        head2 = head2.next;
    }
    while(len1 > minLen){
        temp += head1.val;
        res.append(temp%10);
        temp = parseInt(temp/10);
        minLen++;
    }
    if(len2 > minLen){
        temp += head2.val;
        res.append(temp%10);
        temp = parseInt(temp/10);
        minLen++;
    }
    return res;
};

addTwoNumbers(list1,list2).display();;