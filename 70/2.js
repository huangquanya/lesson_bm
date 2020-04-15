function f(n) {
    if (n == 1) return 1; //结束条件
    return f(n-1) + 1//递归公式
}