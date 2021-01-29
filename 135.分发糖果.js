/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  ratings[ratings.length] = Infinity;
  let i = 0;
  let sum = 0;
  let base = 0;
  while(i < ratings.length - 1) {
    const star = i;
    while(ratings[i] > ratings[i + 1]) {
      i++;
    }
    const newBase = (i > 0 && ratings[i] > ratings[i - 1]) ? base + 1 : 1;
    for(let j = i; j > star; j--) {
      sum += (i - j + newBase);
    }
    sum += (ratings[star] > ratings[star - 1] && base + 1 > i - star + newBase) ? base + 1 : i - star + newBase;
    base = newBase;
    i++;
  }
  return sum;
};
// @lc code=end

