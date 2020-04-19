// let redo = 0;
// let fib = function (n) {
//     redo++; 
//     if(n === 1 || n === 2){
//         return 1;
//     }
//     return fib(n-1) + fib(n-2);
//   };
//   for (let i = 1; i <= 10; i++){
//     console.log(i + ':' +  fib(i) + '     fib调用次数：' + redo);
//   }

// let redo = 0;
// var fib = function (n) {
//     let memerize = [0,1]
//     function check(n) {
//         redo++;
//         let result = memerize[n];
//         if (typeof result != 'number') {
//             memerize[n]= result;
//             result = fib(n - 1) + fib(n - 2);
//         }
//         return result;
//     }
//     return memerize[n];
//   };
//   for (let i = 0; i <= 10; i++){
//     console.log(i + ':' +  fib(i) + '     fib调用次数：' + redo);
//   }
// let redo = 0;
// let memorize = [1,1];
// let fib = function (n) {
//     redo++; 
//     if(typeof memorize[n] != 'number'){
//         return  memorize[n]=fib(n-1) + fib(n-2);
//     }
//     return memorize[n]
//   };
//   for (let i = 0; i <= 9; i++){
//     console.log(i+1 + ':' +  fib(i) + '     fib调用次数：' + redo);
//   }
let redo = 0;
function fib(n) {
    if (n === 1 || n === 2) {
        redo++;
        return n;
    };
    let ret = 0;
     pre = 2;
     prepre = 1;
     for(let i = 3; i<=n; i++){
        redo++;
         ret = pre + prepre;
         prepre = pre;
         pre = ret;
     }
    return ret;
}
for (let i = 1; i <= 10; i++){
    console.log(i + ':' +  fib(i) + '     fib调用及内部循环次数：' + redo);
  }