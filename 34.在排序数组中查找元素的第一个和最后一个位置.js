/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const search = (direction) => {
    let l = 0;
    let r = nums.length;
    let p = -1;
    while(l <= r) {
      const m = Math.floor((l + r) / 2);
      if(nums[m] === target) {
        p = m;
        if(direction === 'left') {
          r = m - 1;
        } else {
          l = m + 1;
        }
      } else if(nums[m] < target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return p;
  }
  return [search('left'), search('right')];
};
// @lc code=end

