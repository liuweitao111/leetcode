/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if(matrix.length === 0) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;

  const left = Array(n).fill(0);
  const right = Array(n).fill(n - 1);
  const heights = Array(n).fill(0);

  let maxArea = 0;
  for(let i = 0; i < m; i++) {
    // 更新heights
    for(let j = 0; j < n; j++) {
      heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
    }
    // 更新left
    let currLeft = 0;
    for(let j = 0; j < n; j++) {
      if(matrix[i][j] === '1') {
        left[j] = Math.max(left[j], currLeft);
      } else {
        left[j] = 0;
        currLeft = j + 1;
      }
    }
    // 更新right
    let currRight = n - 1;
    for(let j = n - 1; j >= 0; j--) {
      if(matrix[i][j] === '1') {
        right[j] = Math.min(right[j], currRight);
      } else {
        right[j] = n - 1;
        currRight = j - 1;
      }
    }
    for(let j = 0; j < n; j++) {
      const area = (right[j] - left[j] + 1) * heights[j];
      if(area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
};
// @lc code=end

