/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const preSum = new Map();
  let res = 0;
  let sum = 0;
  preSum.set(0, 1);
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(preSum.has(sum - k)) {
      res += preSum.get(sum - k);  
    }
    if(preSum.has(sum)) {
      preSum.set(sum, preSum.get(sum) + 1);
    } else {
      preSum.set(sum, 1);
    }
  }
  return res;
};
// @lc code=end

