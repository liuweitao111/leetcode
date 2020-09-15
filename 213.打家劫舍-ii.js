/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if(len === 0) {
    return 0;
  }
  if(len <= 2) {
    return Math.max(...nums);
  }
  let prev1 = nums[0];
  let curr1 = nums[0];
  let prev2 = 0;
  let curr2 = nums[1];
  for(let i = 2; i < len - 1; i++) {
    let tmp = curr1;
    curr1 = Math.max(curr1, prev1 + nums[i]);
    prev1 = tmp;
    tmp = curr2;
    curr2 = Math.max(curr2, prev2 + nums[i]);
    prev2 = tmp;
  }
  return Math.max(curr1, curr2, prev2 + nums[len - 1]);
};
// @lc code=end

