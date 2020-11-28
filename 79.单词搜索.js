/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const n = board.length;
  if(!n) {
    return false;
  }
  const m = board[0].length;
  const len = word.length;
  const visit = Array.from(board).map(() => []);
  const dfs = (i, j, pos) => {
    if(len === pos) {
      return true;
    }
    if(i < 0 || i > n - 1 || j < 0 || j > m - 1) {
      return false;
    }
    if(!visit[i][j] && board[i][j] === word[pos]) {
      visit[i][j] = 1;
      const res = dfs(i - 1, j, pos + 1) || dfs(i + 1, j, pos + 1) || dfs(i, j - 1, pos + 1) || dfs(i, j + 1, pos + 1);
      visit[i][j] = 0;
      return res;
    }
    return false;
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end

