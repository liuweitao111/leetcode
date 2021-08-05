/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const res = Array(temperatures.length).fill(0);

  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    let top = stack[stack.length - 1];
    while (temperatures[top] < temperatures[i]) {
      res[top] = i - top;
      stack.pop();
      top = stack[stack.length - 1];
    }

    stack.push(i);
  }

  return res;
};
// @lc code=end
