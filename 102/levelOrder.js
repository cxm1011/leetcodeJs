
var levelOrder = function(root) {
    var queue = [];
  var result = [];
  if (root !== null) {
    queue.push(root);
  }
  while(queue.length !== 0) {
    var level = [];
    var len = queue.length;
    for (var i = 0; i < len; i ++) {
      var currentNode = queue.shift();
      level.push(currentNode.val);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(level);
  }
  return result.reverse();
};

let root = [3,9,20,null,null,15,7];
console.log(levelOrder(root));