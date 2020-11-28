/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const size = matrix.length;
  for(let i = 0; i < Math.ceil(size / 2); i++) {
    for(let j = 0; j < Math.floor(size / 2); j++) {
      const tmp = [];
      let row = i;
      let col = j;
      for(let k = 0; k < 4; k++) {
        tmp[k] = matrix[row][col];
        [row, col] = [col, size - 1 - row];
      }
      for(let k = 0; k < 4; k++) {
        matrix[row][col] = tmp[(k + 3) % 4];
        [row, col] = [col, size - 1 - row];
      }
    }
  }
};
// @lc code=end

