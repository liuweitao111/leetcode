/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const board = Array.from({length: n}).map(v => Array(n).fill('.'));
  const pos = [];
  const result = [];
  const getValidPos = i => {
    const inValidPos = [];
    const validPos = [];
    for(let k = 0; k < pos.length; k++) {
      inValidPos.push(pos[k].j);
      const d = i - pos[k].i;
      inValidPos.push(pos[k].j + d);
      inValidPos.push(pos[k].j - d);
    }
    for(let j = 0; j < n; j++) {
      if(!inValidPos.includes(j)) {
        validPos.push(j);
      }
    }
    return validPos;
  }
  const dfs = (i) => {
    if(i === n) {
      result.push(board.map(v => v.join('')));
      return;
    }
    const validPos = getValidPos(i);
    for(let k = 0; k < validPos.length; k++) {
      const j = validPos[k];
      pos.push({i, j});
      board[i][j] = 'Q';
      dfs(i + 1);
      board[i][j] = '.';
      pos.pop();
    }
  }
  dfs(0);
  return result;
};
// @lc code=end

