/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(!nums.length) {
    return [];
  }
  const ans = [];
  let start = nums[0];
  let prev = nums[0];
  for(let i = 1; i <= nums.length; i++) {
    if(prev !== nums[i] - 1) {
      if(start === prev) {
        ans.push(String(start));
      } else {
        ans.push(`${start}->${prev}`);
      }
      start = nums[i];
    }
    prev = nums[i];
  }
  return ans;
};
// @lc code=end

