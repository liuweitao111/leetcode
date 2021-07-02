/*
 * @lc app=leetcode.cn id=1833 lang=typescript
 *
 * [1833] 雪糕的最大数量
 */

// @lc code=start
function maxIceCream(costs: number[], coins: number): number {
  let count = 0;
  costs.sort((a, b) => a - b);
  for(let i = 0; i < costs.length; i++) {
    if(coins < costs[i]) {
      return count;
    }
    coins -= costs[i];
    count++;
  }
  return count;
};
// @lc code=end

