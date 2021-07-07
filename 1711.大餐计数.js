/*
 * @lc app=leetcode.cn id=1711 lang=javascript
 *
 * [1711] 大餐计数
 */

// @lc code=start
/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
  const MOD = 1e9 + 7;
  let max = 0;
  for (const val of deliciousness) {
    max = Math.max(val, max);
  }
  const maxSum = max * 2;
  const sumMap = {};
  let res = 0;
  for(let i = 0; i < deliciousness.length; i++) {
    const val = deliciousness[i];
    for(let sum = 1; sum <= maxSum; sum <<= 1) {
      const count = sumMap[sum - val] || 0;
      res = (res + count) % MOD;
    }
    sumMap[val] = (sumMap[val] || 0) + 1;
  }
  return res;
};
// @lc code=end