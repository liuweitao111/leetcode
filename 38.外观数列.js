/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if(n === 1) {
    return '1';
  }
  const s = countAndSay(n - 1);
  let count = 0;
  let ans = '';
  for(let i = 0; i < s.length; i++) {
    count++;
    if(s[i] !== s[i + 1]) {
      ans += count + s[i];
      count = 0;
    }
  }
  return ans;
};
// @lc code=end

