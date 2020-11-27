/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let ans = 0;
  const sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  const map = [];
  let i = sign;
  while(dividend >= divisor) {
    map.push({
      v: i,
      d: divisor,
    });
    i += i;
    divisor += divisor;
  }
  while(map.length) {
    const { v, d } = map.pop();
    if(dividend >= d) {
      ans += v;
      dividend -= d;
    }
  }
  if(ans < -2147483648 || ans > 2147483647) {
    return 2147483647;
  }
  return ans;
};
// @lc code=end  