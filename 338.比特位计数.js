/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const res = [0];

  for(let i = 1; i <= num; i++) {
    const prev = Math.floor(i / 2);
    res[i] = res[prev] + (i % 2);
  }

  return res;
};
// @lc code=end

