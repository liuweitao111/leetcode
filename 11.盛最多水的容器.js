/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while(left < right) {
    let value;
    if(height[left] < height[right]) {
      value = (right - left) * height[left];
      left++;
    } else {
      value = (right - left) * height[right];
      right--;
    }
    if(max < value) {
      max = value;
    }
  }
  return max;
};
// @lc code=end

