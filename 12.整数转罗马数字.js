/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const map = [
    { k: 1000, v: 'M'},
    { k: 900, v: 'CM'},
    { k: 500, v: 'D'},
    { k: 400, v: 'CD'},
    { k: 100, v: 'C'},
    { k: 90, v: 'XC'},
    { k: 50, v: 'L'},
    { k: 40, v: 'XL'},
    { k: 10, v: 'X'},
    { k: 9, v: 'IX'},
    { k: 5, v: 'V'},
    { k: 4, v: 'IV'},
    { k: 1, v: 'I'},
  ];
  let ans = '';
  for(let i = 0; i < map.length; i++) {
    if(num === 0) {
      break;
    }
    const { k, v } = map[i];
    if(num < k) {
      continue;
    }
    const c = Math.floor(num / k);
    for(let i = 0; i < c; i++) {
      ans += v;
    }
    num %= k;
  }
  return ans;
};
// @lc code=end

