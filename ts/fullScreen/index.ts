// TS 内置类型
// boolen number string 
// array（数组）：每一项类型都一样  元祖：每一项的类型不必都相同 
let list = [1,2,3,4]
let list1: number[] = [1,2]//定义数组
let list2: [string, number] = ['1', 2]//定义元组
// 枚举 
enum Color { Red = 0, Green = 1, Blue = 2}
let color: Color = Color.Red;
let colorName = Color[1]
// any 相当没有使用ts
let a: any ; //用户输入 这样未知的类型适合使用
// void  空
function test(a: void): void {}
// none  undifined 
let b: null = null;
// never 没有返回值
function test1(): never {
    // while(true){}
    throw new Error('error');
}
// object

// 聚合类型
// 定义一个类型； 进入全屏的时候 调用就是其中之一
type RFSmethods = 'requestFullscreen'|'webkitRequestFullScreen'|'mozRequestFullScreen'|'msRequestFullscreen'
// 变量
interface HTMLElement {
    requestFullscreen(): any,
    webkitRequestFullScreen(): any,
    mozRequestFullScreen(): any,
    msRequestFullscreen(): any
}
let RFS_METHOD: RFSmethods
if ('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen';
} else if ('webkitRequestFullScreen') {
    RFS_METHOD = 'webkitRequestFullScreen';
}else if ('mozRequestFullScreen') {
    RFS_METHOD = 'mozRequestFullScreen';
}else if ('msRequestFullscreen') {
    RFS_METHOD = 'msRequestFullscreen';
}
function beFull(el: HTMLElement) {
// 检查兼容性
    // el.requestFullscreen();
    el[RFS_METHOD]();
}
// ts 结合原生 html dom
// ts 结合 node
// ts 结合 react
// box 是一个dom节点，
const box = document.querySelector('.box');
const btn = document.getElementById('btn');
if (btn) {
  btn.addEventListener('click', function () {
    // box.requestFullscreen();
    // 是不是 Element 的实例 ？？
    // Element 是内置的一个类
    // html 标签都是 Element 实例
    // box ： element | null 
    if (box instanceof HTMLElement) {
      beFull(box);
    }
  })
}

// // TS: 内置  + 外部类型
// // boolen number string
// // 数组: 每一项类型都是一样的 元组
// let list = [1, 2, 3, 4, '4', '5']
// let list1: number[] = [1, 2]
// let list2: [string, number] = ['1', 2];
// // 枚举
// enum Color { Red = 0, Green = 1, Blue = 2 }
// let color: Color = Color.Red;
// let colorName = Color[0]; // 'Red'
// // any
// let a: any;   // 不清楚类型： 用户输入
// // void  空

// // null, undefined
// let b: null = null;
// // never
// function test(): never {
//   // while(true) {
//   // }
//   throw new Error('error');
// }

// // 联合类型
// // 定义一个类型: 进入全屏的时候 调用就是其中之一
// type RFSmethods = 'requestFullscreen' | 'webkitRequestFullScreen' | 'mozRequestFullScreen' |
//   'msRequestFullscreen'
// // dom 没有帮我定义 
// interface Element {
//   requestFullscreen(): any,
//   webkitRequestFullScreen(): any,
//   mozRequestFullScreen(): any,
//   msRequestFullscreen(): any
// }
// // 变量
// let RFS_METHOD: RFSmethods
// if ('requestFullscreen' in document.body) {
//   RFS_METHOD = 'requestFullscreen';
// } else if ('webkitRequestFullScreen' in document.body) {
//   RFS_METHOD = 'webkitRequestFullScreen'
// } else if ('mozRequestFullScreen' in document.body) {
//   RFS_METHOD = 'mozRequestFullScreen'
// } else if ('msRequestFullscreen' in document.body) {
//   RFS_METHOD = 'msRequestFullscreen'
// }
// // object 
// function beFull(el: Element) {
//   // 检查兼容性 
//   // RFS_METHOD 4 个 中的一个
//   // el.requestFullscreen();
//   console.log(el, RFS_METHOD);
//   el[RFS_METHOD]();
// }
// // ts 结合 原生 html dom
// // ts 结合 Node
// // ts 结合 react
// // dom 节点
// // 节点类型 TS 没有内置， lib
// const btn = document.getElementById('btn');
// const box = document.querySelector('.box');
// if (btn) {
//   btn.addEventListener('click', function () {
//     // box.requestFullscreen();
//     // 是不是 Element 的实例 ？？
//     // Element 是内置的一个类
//     // html 标签都是 Element 实例
//     // box ： element | null 
//     if (box instanceof Element) {
//       beFull(box);
//     }
//   })
// }