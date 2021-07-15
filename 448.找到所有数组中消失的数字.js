/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== 0 && nums[i] !== i + 1) {
      const num = nums[i] - 1;
      if (nums[num] === num + 1) {
        nums[i] = 0;
      } else {
        [nums[i], nums[num]] = [nums[num], nums[i]];
      }
    }
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      res.push(i + 1);
    }
  }

  return res;
};
// @lc code=end
