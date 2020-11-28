/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = Array.from({length: n}).map(() => []);
  let l = 0, r = n - 1, t = 0, b = n - 1;
  let num = 1;
  while(l < r && t < b) {
    let x = l, y = t;
    while(y < b) {
      matrix[x][y++] = num++;
    }
    while(x < r) {
      matrix[x++][y] = num++;
    }
    while(y > t) {
      matrix[x][y--] = num++;
    }
    while(x > l) {
      matrix[x--][y] = num++;
    }
    l++;
    r--;
    t++;
    b--;
  }
  if(n % 2) {
    matrix[n >> 1][n >> 1] = num;
  }
  return matrix;
};
// @lc code=end