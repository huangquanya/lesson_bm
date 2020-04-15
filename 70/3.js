// 优化一下楼梯
function f(n) {
    const w = new Map();// es6新的数据类型 map
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (w.has(n)) {
        return w.get(n);
    }
    // return f(n-1) + f(n-2);
    const ret = f(n-1) + f(n-2);
    w.set(n, ret);
    // console.log(n,'----');
    return ret;
}
console.log(f(50))