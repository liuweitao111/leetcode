/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(nums.length < 2) {
    return;
  }
  let pos = 0;
  for(let i = nums.length - 1; i > 0; i--) {
    if(nums[i - 1] < nums[i]) {
      // 二分查找，找到第一个大于num[i-1]的元素
      let l = i;
      let r = nums.length - 1;
      while(l <= r) {
        const mid = (l + r) >> 1;
        if(nums[mid] > nums[i - 1]) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      pos = i;
      [nums[i - 1], nums[r]] = [nums[r], nums[i - 1]];
      break;
    }
  }
  let l = pos;
  let r = nums.length - 1;
  while(l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};
// @lc code=end

