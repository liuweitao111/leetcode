/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const cache = new Set();
  while(n !== 1 && !cache.has(n)) {
    cache.add(n);
    let res = 0;
    while(n) {
      res += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = res;
  }
  return n === 1;
};
// @lc code=end

