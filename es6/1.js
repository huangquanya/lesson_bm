const ages = [32, 15, 19, 12]
// 所有大于18的数字
// const nums = [];//空间开销O(n)
// for(let age of ages){
//     if(age >= 18){
//         nums.push(age);
//     }
// }
// console.log(nums);
// 命名
// ages 数据， filter语义化的 过滤
// 1. 计数 for 机器化，表意性差
// 2. 表述性好一些 forEach 函数式编程 提升可读性
const adultArr = ages.filter(age => age >= 18);
// 出席？
const adultPresent = ages.some(age => age >= 18);

// console.log(adultPresent)
// 所有人满足需求？
// ？取名
const allOldEnough = ages.every(age => age >= 18);
console.log(allOldEnough)