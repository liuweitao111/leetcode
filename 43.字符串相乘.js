/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') {
    return '0';
  }
  let res = '';
  for(let i = num2.length - 1; i >= 0; i--) {
    res = add(res, multiplySingle(num1, num2[i], num2.length - 1 - i));
  }
  return res;
};
function multiplySingle(num, n, zero) {
  n = Number(n);
  let i = num.length - 1;
  let flag = 0;
  let res = '';
  while(i >= 0) {
    const r = num[i] * n + flag;
    res = `${r % 10}${res}`;
    flag = Math.floor(r / 10);
    i--;
  }
  res = flag ? `${flag}${res}` : res;
  return res + Array(zero).fill(0).join('');
}
function add(num1, num2) {
  let flag = 0;
  let i1 = num1.length - 1;
  let i2 = num2.length - 1;
  let sum = '';
  while(i1 >= 0 || i2 >= 0) {
    const s = Number(num1[i1] || 0) + Number(num2[i2] || 0) + flag;
    sum = `${s % 10}${sum}`;
    flag = s > 9 ? 1 : 0;
    i1--;
    i2--;
  }
  return flag ? `1${sum}` : sum;
}
// @lc code=end

