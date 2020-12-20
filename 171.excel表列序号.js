/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const getNum = ch => ch.charCodeAt() - 64;
  let ans = 0;
  for(const ch of s) {
    ans = ans * 26 + getNum(ch);
  }
  return ans;
};
// @lc code=end

