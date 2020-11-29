/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let s, flag = 1, i = digits.length - 1;
  while(i >= 0 && flag) {
    s = digits[i] + 1;
    flag = s === 10 ? 1 : 0;
    digits[i] = s % 10;
    i--;
  }
  if(flag === 1) {
    digits.unshift(1);
  }
  return digits;
};
// @lc code=end

