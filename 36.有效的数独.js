/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // 验证行
  for(let i = 0; i < 9; i++) {
    const set = new Set();
    for(let j = 0; j < 9; j++) {
      if(board[i][j] !== '.' && set.has(board[i][j])) {
        return false;
      } else {
        set.add(board[i][j]);
      }
    }
  }
  // 验证列
  for(let j = 0; j < 9; j++) {
    const set = new Set();
    for(let i = 0; i < 9; i++) {
      if(board[i][j] !== '.' && set.has(board[i][j])) {
        return false;
      } else {
        set.add(board[i][j]);
      }
    }
  }
  // 验证小方格
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      const set = new Set();
      for(let x = 0; x < 3; x++) {
        for(let y = 0; y < 3; y++) {
          const v = board[3 * i + x][3 * j + y];
          if(v !== '.' && set.has(v)) {
            return false;
          } else {
            set.add(v);
          }
        }
      }
    }
  }
  return true;
};
// @lc code=end