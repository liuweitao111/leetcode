/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  const ans = [];
  while(n) {
    const t = n % 26;
    n = Math.floor(n / 26);
    if(t === 0) {
      ans.push('Z');
      n = n - 1;
    } else {
      ans.push(String.fromCharCode(64 + t));
    }
  }
  return ans.reverse().join('');
};
// @lc code=end

