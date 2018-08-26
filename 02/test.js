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

}
function display(list){
    // while(list){
    //     console.log(list.val);
    //     console.log();
    //     list = list.next;
    // }    
    var current = list;
    while(current){
        console.log(current.val+' ');
        current = current.next;
    }
}

var arr = [2,4,3];
var list = new LinkedList();
for(let i = 0;i<arr.length;i++){
    list.append(arr[i]);
}
 display(list);
console.log(list.toString());
list.display();