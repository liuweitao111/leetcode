/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var cache = {};
  for(var i = 0; i < nums.length; i++) {
    if(cache[target - nums[i]] !== undefined) {
      return [cache[target - nums[i]], i];
    }
    cache[nums[i]] = i;
  }
};

// @lc code=end

