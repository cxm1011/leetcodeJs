
 function ListNode(val) {
     this.val = val;
     this.next = null;
}

var arr1 = [5];
var l1 = new ListNode(-1);
var cur1 = l1;
for(let i = 0;i<arr1.length;i++){
   cur1.next = new ListNode(arr1[i]);
   cur1 = cur1.next;
}

var arr2 = [5];
var l2 = new ListNode(-1);
var cur2 = l2;
for(let i = 0;i<arr2.length;i++){
   cur2.next = new ListNode(arr2[i]);
   cur2 = cur2.next;
}

function display(list){
    while(list){
        console.log(list.val);
        list = list.next;
    }
}
// display(l1.next);


var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(-1);
    var cur = res;
    var head1 = l1.next;
    var head2 = l2.next;
    var temp = 0;
    while(head1 || head2){
        var v1 = head1 ? head1.val:0;
        var v2 = head2 ? head2.val:0;
        temp += v1+v2;
        cur.next = new ListNode(temp%10);
        cur = cur.next;
        temp = parseInt(temp/10);

        head1 = head1 ? head1.next:null;
        head2 = head2 ? head2.next:null;
    }
    if(temp != 0){
        cur.next = new ListNode(temp);
    }
    return res.next;
};
display(addTwoNumbers(l1,l2));
