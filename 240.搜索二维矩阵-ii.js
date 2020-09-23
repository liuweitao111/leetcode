/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const n = matrix.length;
  if(n === 0) {
    return false;
  }
  const m = matrix[0].length;
  let i = 0;
  let j = m - 1;
  while(i < n && j >= 0) {
    if(matrix[i][j] === target) {
      return true;
    }
    if(matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};
// @lc code=end

