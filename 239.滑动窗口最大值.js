/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const result = [];
  let l = 0, r = 0;
  // 初始化sliding window
  while(r < k) {
    if(nums[r] > nums[l]) {
      l = r;
    }
    r++;
  }
  result.push(nums[l]);
  while(r < nums.length) {
    // 最大值移出窗框口
    if(r - l >= k) {
      l++; // 假设窗口的第一个数据为最大值
      let i = l;
      while(i <= r) {
        if(nums[i] > nums[l]) {
          l = i;
        }
        i++;
      }
    } else if(nums[r] >= nums[l]) {
      l = r;
    }
    result.push(nums[l]);
    r++;
  }
  return result;
};
// @lc code=end

