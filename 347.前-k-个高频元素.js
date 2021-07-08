/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {};
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  const res = [];
 
  Object.entries(map).forEach(([num, cnt]) => {
    if (res.length < k) {
      res.push([num, cnt]);
      let i = res.length - 1;
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if(res[parent][1] > res[i][1]) {
          [res[parent], res[i]] = [res[i], res[parent]];
        } else {
          break;
        }
        i = parent;
      }
    } else if (res[0][1] < cnt){
      res[0] = [num, cnt];
      let i = 0;
      while (i < k) {
        let min = 2 * i + 1;
        if (res[2 * (i + 1)] && res[min][1] > res[2 * (i + 1)][1]) {
          min = 2 * (i + 1);
        }
        if(res[min] && res[min][1] < res[i][1]) {
          [res[min], res[i]] = [res[i], res[min]];
        } else {
          break;
        }
        i = min;
      }
    }
  });
  return res.map(item => Number(item[0]));
};
// @lc code=end