/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let uniq = new Set();//es6中的新的数据结构，只会存下不重复的值
    let size;
    for(let i = 0;i<nums.length;i++){
        uniq.add(nums[i]);
        size = uniq.size;
        if(uniq.size !== i+1){
            return nums[i]
        }
    }
};
// array.forEach(function(currentValue, index, arr), thisValue)
