// let nums = [2,7,11,15];
// let target = 9; 
// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             let a=nums[i]+nums[j]
//             if(a === target){
//                 console.log('数字','nums[i]','nums[j]','下标',                  'i','j');
//                 nums[j] = target;
//                 break;
//             }
//         }
//     }
// };
var twoSum = function(nums, target) {
    let arr = []; //坐标放进去
    for (let i = 0;  i < nums.length; i++) {  //暴力解法
      // 循环一遍
      for (let j = i + 1;  j < nums.length; j++) { //内层循环
        // 不能自恋
        if (nums[i] + nums[j] === target) {
          arr = [i, j];
          return arr;
        }
      }
    }
  }