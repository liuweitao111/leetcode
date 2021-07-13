/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => {
    const h = b[0] - a[0];
    if (h !== 0) {
      return h;
    }
    return a[1] - b[1];
  });

  const res = [];
  people.forEach(item => {
    res.splice(item[1], 0, item);
  });

  return res;
};
// @lc code=end
