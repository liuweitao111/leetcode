/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // 将candidates降序排列
  candidates.sort((a, b) => b - a);

  const len = candidates.length;
  const ans = [];
  const dfs = (target, combine, begin) => {
    for(let i = begin; i < len; i += 1) {
      if(target - candidates[i] > 0) {
        dfs(target - candidates[i], [...combine, candidates[i]], i);
      } else if(target - candidates[i] === 0) {
        ans.push([...combine, candidates[i]]);
      }
    }
  }
  dfs(target, [], 0);
  return ans;
};
// @lc code=end

