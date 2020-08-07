/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for(let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while(k > j) {
      const sum = nums[i] + nums[j] + nums[k];
      if(Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }
      if(sum > target) {
        k--;
      } else if(sum < target) {
        j++;
      } else {
        return target;
      }
    }
  }
  return closestSum;
};
// @lc code=end

