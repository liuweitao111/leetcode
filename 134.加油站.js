/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const len = gas.length;
  let i = 0;
  while(i < len) {
    let cnt = 0;
    let g = 0;
    while(cnt < len) {
      const j = (i + cnt) % len;
      g = g + gas[j] - cost[j];
      if(g < 0) {
        break;
      }
      cnt++;
    }
    if(cnt === len) {
      return i;
    } else {
      i = i + cnt + 1;
    }
  }
  return -1;
};
// @lc code=end

