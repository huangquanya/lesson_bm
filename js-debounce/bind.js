
// call apply 一类
function sum(a,b,c) {
    return a+b+c
}
// 参数传完整
sum.call(null,1,10,20)
// 可以不完整 会返回一个函数，让我接着传递剩下的参数
// sum  abc
// ab
let add11 = sum.bind(null,1,10);//返回缺少一个参数[Function: bound sum]

console.log(add11);
let res = add11(20);
console.log(res);

function test(reg, str) {
    return reg.test(str);
}
let str = `
`
let str1 = `123`;
let str2 = `
456`;
let str3 = `789`;
let whiteSpace =/\n/g
//  \n :new line
//  \t: tab
//  glob: 全局
console.log(test(whiteSpace,str))
console.log(test(whiteSpace,str1))
console.log(test(whiteSpace,str2))
console.log(test(whiteSpace,str3))
// test：测试一下某字符串是否存在回车
// 每次 都带着whiteSpace
console.log('------------------')
let hasWhiteSpace = test.bind(null,whiteSpace);
console.log(hasWhiteSpace(str1))
console.log(hasWhiteSpace(str2))
console.log(hasWhiteSpace(str3))
console.log('------------------')

let hasTabSpace = test.bind(null,/\t/g);
console.log(hasTabSpace('\t123'))
let hasNumber = test.bind(null,/[0-9]/g);
console.log(hasNumber('123aaa'))
