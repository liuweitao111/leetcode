/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
const map = {};
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if(N < 2) {
    return N;
  }
  if(map[N]) {
    return map[N];
  }
  map[N] = fib(N - 1) + fib(N - 2);
  return map[N];
};
// @lc code=end

