/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start

const map = {};
const isValid = (n, count) => {
  if(count === 1) {
    return !!map[n];
  }
  for(const m in map) {
    if(isValid(n - m, count - 1)) {
      return true;
    }
  }
  return false;
}
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if(n === 0) {
    return 0;
  }
  for(let i = 1; i * i <= n; i++) {
    map[i * i] = i;
  }
  let count = 1;
  while(!isValid(n, count)) {
    count++;
  }
  return count;
};
// @lc code=end

