//
//执行用时: 104 ms, 在Maximum Depth of Binary Tree的JavaScript提交中击败了37.68% 的用户
// 内存消耗: 37.1 MB, 在Maximum Depth of Binary Tree的JavaScript提交中击败了0.00% 的用户
var maxDepth = function(root) {
    return root === null ? 0 : Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};