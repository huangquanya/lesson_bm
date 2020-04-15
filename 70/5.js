function f(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
        // 重复计算 时间内存
    // 变量
    let ret = 0;
     pre = 2;
     prepre = 1;
     for(let i = 3; i<=n; i++){
         ret = pre + prepre;
         prepre = pre;
         pre = ret;
     }
    return ret;
}