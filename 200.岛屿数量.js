/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  if(!m) {
    return 0;
  }
  const n = grid[0].length;
  const dfs = (i , j) => {
    if(i < 0 || j < 0 || i >= m || j >= n) {
      return;
    }
    if(grid[i][j] === '0') {
      return;
    }
    grid[i][j] = '0';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
  let count = 0;
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }
  return count;
};
// @lc code=end

