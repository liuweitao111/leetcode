/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const n = board.length;
  if(!n) {
    return;
  }
  const m = board[0].length;
  const dfs = (i, j) => {
    if(i < 0 || i >= n || j < 0 || j >= m || board[i][j] !== 'O') {
      return;
    }
    board[i][j] = 'A';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
  for(let i = 0; i < n; i++) {
    dfs(i, 0);
    dfs(i, m - 1);
  }
  for(let j = 0; j < m; j++) {
    dfs(0, j);
    dfs(n - 1, j);
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(board[i][j] === 'A') {
        board[i][j] = 'O';
      } else if(board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
};
// @lc code=end

