/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const board = Array.from({length: n}).map(v => Array(n).fill('.'));
  const pos = [];
  let count = 0;
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
      count++;
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
  return count;
};
// @lc code=end

