// 两数 比较的时候
// 100%交换  洗牌算法shuffle
// 后
// 从后往前 去一个数a
// 从未洗牌的区间之内取出一个数 b
//  a b 交换
// a 完成了
// 从后往前 重复
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++){
        let idx = Math.floor(Math.random()*(len - i));
        [arr[len -1 -i],arr[idx]] = [arr[idx],arr[len -1 -i]]
    }
    return arr
}
console.log(shuffle(arr))