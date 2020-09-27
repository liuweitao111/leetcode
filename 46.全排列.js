/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const len = nums.length;
  const ans = [];
  const dfs = (item) => {
    if(item.length === len) {
      ans.push(item);
      return;
    }
    for(let i = 0; i < len; i += 1) {
      if(item.indexOf(nums[i]) === -1) {
        dfs([...item, nums[i]]);
      }
    }
  }
  dfs([]);
  return ans;
};
// @lc code=end

