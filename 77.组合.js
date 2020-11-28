/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ans = [];
  const path = [];
  const dfs = begin => {
    if(path.length === k) {
      ans.push([ ...path ]);
      return;
    }
    if(path.length + n - begin < k) {
      return;
    }
    for(let i = begin + 1; i <= n; i += 1) {
      path.push(i);
      dfs(i);
      path.pop();
    }
  }
  dfs(0);
  return ans;
};
// @lc code=end

