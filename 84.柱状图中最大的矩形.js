/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = [0];
  const newHeights = [0, ...heights, 0];
  let maxArea = 0;
  for(let i = 1; i < newHeights.length; i++) {
    let height = newHeights[stack[stack.length - 1]];
    while(height > newHeights[i]) {
      const idx1 = stack.pop();
      const idx2 = stack[stack.length - 1];
      const area = newHeights[idx1] * (i - idx2 - 1);
      if(area > maxArea) {
        maxArea = area;
      }
      height = newHeights[idx2];
    }
    stack.push(i);
  }
  return maxArea;
};
// @lc code=end

