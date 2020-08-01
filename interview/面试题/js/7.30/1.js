// 实现一个函数a（），第一次调用输出0，再调用输出1，再调用又是0。再调又是1。不得使用全局变量



const a = (function (){
    let count = 1;
    return function(){
        count++;
        if(count%2 ===0){
            return 0
        }else{
            return 1
        }
    }
})()
console.log(a())
console.log(a())