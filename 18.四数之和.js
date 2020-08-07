/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  for(let i = 0; i < nums.length - 3; i++) {
    if(i !== 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    for(let j = i + 1; j < nums.length - 2; j++) {
      if(j !== i + 1 && nums[j - 1] === nums[j]) {
        continue;
      }
      let x = j + 1;
      let y = nums.length - 1;
      while(y > x) {
        const sum = nums[i] + nums[j] + nums[x] + nums[y];
        if(sum === target) {
          result.push([nums[i], nums[j], nums[x], nums[y]]);
        } 
        if(sum >= target) {
          let y0 = y - 1;
          while(y0 > x && nums[y0] === nums[y]) {
            y0--;
          }
          y = y0;
        } 
        if(sum <= target){
          let x0 = x + 1;
          while(x0 < y && nums[x0] === nums[x]) {
            x0++;
          }
          x = x0;
        }
      }
    }
  }
  return result;
};
// @lc code=end

