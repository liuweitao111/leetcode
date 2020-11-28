/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const map = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  const key = Array.from({length: n}).map((v, i) => i + 1);
  let ans = "";
  k = k - 1;
  while(n-- > 0) {
    const pos = Math.floor(k / map[n]);
    ans += key[pos];
    key.splice(pos, 1);
    k %= map[n];
  }
  return ans;
};
// @lc code=end

