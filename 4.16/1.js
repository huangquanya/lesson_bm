/**
 * auther：hqy
 * date：4.16，2020
 * func: 两数相加
 */

function addNumber(num1, num2) {
    if (arguments.length < 2) {
        console.error('参数不够');
        throw new Error('参数不够');
        return;
      }
        
      if (typeof num1 != 'number' || typeof num2 != 'number') {
        throw new Error('参数类型有误');
        return;
      }
    
      return num1 + num2;
    }
console.log(addNumber(1 ,2))