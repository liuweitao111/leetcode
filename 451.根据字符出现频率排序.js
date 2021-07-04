/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const countMap = {};
  // 统计
  for(const c of s) {
    countMap[c] = (countMap[c] || 0) + 1;
  }
  // 排序
  const order = Object.entries(countMap).sort((a, b) => b[1] - a[1]);
  let newS = '';
  for(const item of order) {
    for(let i = 0; i < item[1]; i++) {
      newS += item[0];
    }
  }

  return newS;
};
// @lc code=end
