/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const str = `${Math.abs(x)}`.split('').reverse().join('');
  const number = Number(str) * (x < 0 ? -1 : 1);
  if(number < Math.pow(-2, 31) || number > Math.pow(2, 31) -1) {
    return 0;
  }
  return number;
};
// @lc code=end

