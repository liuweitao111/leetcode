/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(!intervals.length) {
    return [];
  }
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const newIntervals = [intervals[0]];
  let j = 0;
  for(let i = 1; i < intervals.length; i++) {
    if(newIntervals[j][1] < intervals[i][0]) {
      newIntervals.push(intervals[i]);
      j++;
    }else {
      newIntervals[j] = [newIntervals[j][0], Math.max(newIntervals[j][1], intervals[i][1])];
    }
  }
  return newIntervals;
};
// @lc code=end

