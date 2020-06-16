var pathSum = function(root, sum) {
    let res = []
    preOrder = function (node, path) {
        if(!node) return;
        let val = node.val;
        path.push(val);
        if (node.left === null&& node.right === null){
            if (path.reduce((a,b) => a+b,0) === sum){
                res.push(path);
                return;
            }
        }
        preOrder(node.left, path.slice(0));
        preOrder(node.right, path.slice(0));
    }
    preOrder(root, []);
    return res;
};