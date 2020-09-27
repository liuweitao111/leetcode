/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a , b) => a - b);
  const len = nums.length;
  const ans = [];
  const visit = [];
  const dfs = (item) => {
    if(item.length === len) {
      ans.push([...item]);
      return;
    }
    let prev;
    for(let i = 0; i < nums.length; i++) {
      if(!visit[i] && prev !== nums[i]) {
        prev = nums[i];
        visit[i] = 1;
        item.push(nums[i]);
        dfs(item);
        item.pop(nums[i]);
        visit[i] = 0;
      }
    }
  }
  dfs([]);
  return ans;
};
// @lc code=end

