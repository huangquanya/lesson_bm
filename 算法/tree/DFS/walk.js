var preorderTraversal = function(root) {
    let arr = []
    // 遇到了左子树 ｛root， left， right｝
    // 遇到了右子树 ｛root， left， right｝
    helper = function (node){
        if (node) {
            let val = node.val;
            arr.push(val)
            helper(node.left);
            helper(node.right);
        }
    }
    helper(root)
    return arr
};

// 执行用时 :60 ms, 在所有 JavaScript 提交中击败了89.53%的用户
// 内存消耗 :32.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户