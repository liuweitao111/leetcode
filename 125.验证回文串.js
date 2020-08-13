/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  while(start <= end) {
    while(!(/[0-9A-Za-z]/.test(s[start]))) {
      start++;
    }
    while(!(/[0-9A-Za-z]/.test(s[end]))) {
      end--;
    }
    if(start < end && s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
// @lc code=end

