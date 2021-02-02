/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const stack = [];
  for(const n of num) {
    while(stack[stack.length - 1] > n && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }
  let idx = 0;
  while(stack[idx] === '0') {
    idx++;
  }
  return stack.slice(idx, stack.length - k).join('') || "0";
};
// @lc code=end

