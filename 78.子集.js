/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  const dfs = (i, t) => {
    res.push(t.slice());
    for(let j = i; j < nums.length; j++) {
      t.push(nums[j]);
      dfs(j + 1, t);
      t.pop();
    }
  }
  dfs(0, []);
  return res;
};
// var subsets = function(nums) {
//   const count = Math.pow(2, nums.length);
//   const result = [];
//   for(let i = 0; i < count; i++) {
//     result.push(nums.filter((num, j) => i & (1 << j)));
//   }
//   return result;
// };
// @lc code=end

