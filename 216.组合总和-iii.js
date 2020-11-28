/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const ans = [];
  const dfs = (target, combine, begin) => {
    if(target < 0 || combine.length > k) {
      return;
    }
    if(target === 0 && combine.length === k) {
      ans.push(combine);
      return;
    }
    for(let i = begin; i < 10; i++) {
      combine.push(i);
      dfs(target - i, [...combine], i + 1);
      combine.pop();
    }
  }
  dfs(n, [], 1);
  return ans;
};
// @lc code=end

