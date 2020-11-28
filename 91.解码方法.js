/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const valid1 = c => c >= 1 && c <= 9;
  const valid2 = (a, b) => {
    const num = Number(a + b);
    return num >= 10 && num <= 26;
  };
  if(s.length === 0) {
    return 0;
  }
  let dp1 = 1;
  let dp2 = valid1(s[0]) ? 1 : 0;
  for(let i = 1; i < s.length; i++) {
    const tmp = dp2;
    dp2 = (valid1(s[i]) ? dp2 : 0) + (valid2(s[i - 1], s[i]) ? dp1 : 0);
    dp1 = tmp;
  }
  return dp2;
};
// @lc code=end

