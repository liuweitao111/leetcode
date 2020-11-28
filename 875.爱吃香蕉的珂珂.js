/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
function minEatingSpeed(piles, H) {
  const possible = k => piles.reduce((t, p) => t + Math.ceil(p / k), 0) <= H;
  let l = 1;
  let r = Math.max(...piles);
  let m;
  while(l <= r) {
    m = Math.floor((l + r) / 2);
    if(possible(m)) {
      r = m - 1;
    } else {
      m += 1;
      l = m;
    }
  }
  return m;
};
// @lc code=end

