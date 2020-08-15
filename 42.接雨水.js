/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let l = 0;
  let r = height.length - 1;
  let lMax = 0;
  let rMax = 0;
  let sum = 0;
  while(l < r) {
    if(height[l] > height[r]) {
      if(height[r] >= rMax) {
        rMax = height[r];
      } else {
        sum += rMax - height[r];
      }
      r--;
    } else {
      if(height[l] >= lMax) {
        lMax = height[l];
      } else {
        sum += lMax - height[l];
      }
      l++;
    }
  }
  return sum;
};
// @lc code=end

