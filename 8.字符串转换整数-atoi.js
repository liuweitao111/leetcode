/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // 跳过空格
  let i = 0;
  while(str[i] === ' ') {
    i++;
  }
  let symbol = 1;
  if(str[i] === '-') {
    symbol = -1;
    i++;
  } else if(str[i] === '+') {
    i++;
  }
  let num = 0;
  while('0' <= str[i] && str[i] <= '9') {
    num = num * 10 + Number(str[i]);
    if(symbol === 1 && num >= 2147483647) {
      return 2147483647;
    }
    if(symbol === -1 && num >= 2147483648) {
      return -2147483648;
    }
    i++;
  }
  return symbol * num;
};
// @lc code=end

