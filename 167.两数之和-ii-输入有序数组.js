/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i1 = 0;
  let i2 = numbers.length - 1;
  while(i1 < i2) {
    const sum = numbers[i1] + numbers[i2];
    if(sum === target) {
      return [i1 + 1, i2 + 1];
    } else if(sum < target) {
      i1++;
    } else {
      i2--;
    }
  }
};
// @lc code=end

