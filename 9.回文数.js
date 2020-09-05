/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) {
    return false;
  }
  let convertX = 0;
  let tmp = x;
  while(tmp) {
    const a = tmp % 10;
    tmp = Math.floor(tmp / 10);
    convertX = convertX * 10 + a;
  }
  return convertX === x;
};
// @lc code=end

