/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortedNum = nums.sort((a, b) => a - b);
  const sumOfZero = [];
  for(let i = 0; i < sortedNum.length; i++) {
    if(i > 0 && sortedNum[i - 1] === sortedNum[i]) {
      continue;
    }
    let j = i + 1;
    let k = sortedNum.length - 1;
    while(j < k) {
      const sum = sortedNum[i] + sortedNum[j] + sortedNum[k];
      if(sum === 0) {
        sumOfZero.push([sortedNum[i], sortedNum[j], sortedNum[k]]);
      } 
      if(sum >= 0) {
        while(sortedNum[k] === sortedNum[--k]){}
      }
      if(sum <= 0) {
        while(sortedNum[j] === sortedNum[++j]){}
      }
    }
  }
  return sumOfZero;
};
