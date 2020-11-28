/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix.length || !matrix[0].length) {
    return false;
  }
  // 求所在行
  let l = 0;
  let r = matrix.length - 1;
  let row = 0;
  while(l <= r) {
    row = Math.floor((l + r) / 2);
    const val = matrix[row][0];
    if(val === target) {
      return true;
    } else if(val > target) {
      row -= 1;
      r = row;
    } else {
      l = row + 1;
    }
  }
  if(row < 0) {
    return false;
  }
  // 求所在行
  l = 0;
  r = matrix[0].length - 1;
  while(l <= r) {
    const m = Math.floor((l + r) / 2);
    if(matrix[row][m] === target) {
      return true;
    } else if(matrix[row][m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return false;
};
// @lc code=end

