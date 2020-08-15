/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let l = 0;
  let minLen = Infinity;
  let sum = 0;
  for(let r =  0; r < nums.length; r++) {
    sum += nums[r];
    while(sum >= s) {
      if(r - l + 1 < minLen) {
        minLen = r - l + 1;
      }
      sum -= nums[l];
      l++;
    }
  }
  return Number.isFinite(minLen) ? minLen : 0;
};
// @lc code=end

