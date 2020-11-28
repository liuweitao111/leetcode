/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  // 将candidates降序排列
  candidates.sort((a, b) => a - b);
  const len = candidates.length;
  const ans = [];
  const dfs = (target, combine, begin) => {
    if(target < 0) {
      return;
    }
    if(target === 0) {
      ans.push(combine);
      return;
    }
    let prev;
    for(let i = begin; i < len; i++) {
      if(prev !== candidates[i]) {
        dfs(target - candidates[i], [...combine, candidates[i]], i + 1);
        prev = candidates[i];
      }
    }
  }
  dfs(target, [], 0);
  return ans;
};
// @lc code=end

