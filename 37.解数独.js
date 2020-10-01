/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */
// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const check = (i , j, v) => {
    // 检查行
    for(let k = 0; k < 9; k++) {
      if(board[i][k] === v) {
        return false;
      }
    }
    // 检查列
    for(let k = 0; k < 9; k++) {
      if(board[k][j] === v) {
        return false;
      }
    }
    // 检查所在方格
    const r = Math.floor(i / 3);
    const r_e = 3 * (r + 1);
    const c = Math.floor(j / 3);
    const c_e = 3 * (c + 1);
    for(let x = 3 * r; x < r_e; x++) {
      for(let y = 3 * c; y < c_e; y++) {
        if(board[x][y] === v) {
          return false;
        }
      }
    }
    return true;
  }
  // 粗略统计每个空格可以填的数字数量，排序返回
  getEmptyCells = () => {
    const getCandidate = (i, j) => {
      const visit = [];
      // 行
      for(let k = 0; k < 9; k++) {
        if(!visit[board[i][k]]) {
          visit[board[i][k]] = 1;
        }
      }
      // 检查列
      for(let k = 0; k < 9; k++) {
        if(!visit[board[k][j]]) {
          visit[board[k][j]] = 1;
        }
      }
      // 所在方格
      const r = Math.floor(i / 3);
      const r_e = 3 * (r + 1);
      const c = Math.floor(j / 3);
      const c_e = 3 * (c + 1);
      for(let x = 3 * r; x < r_e; x++) {
        for(let y = 3 * c; y < c_e; y++) {
          if(!visit[board[x][y]]) {
            visit[board[x][y]] = 1;
          }
        }
      }
      const candidate = [];
      for(let i = 1; i <= 9; i++) {
        if(!visit[i]) {
          candidate.push(String(i));
        }
      }
      return candidate;
    }
    const cells = [];
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        if(board[i][j] === '.') {
          cells.push({
            i,
            j,
            candidate: getCandidate(i, j)
          })
        }
      }
    }
    cells.sort((a, b) => a.candidate.length - b.candidate.length);
    return cells;
  }
  const emptyCells = getEmptyCells();
  const dfs = (x) => {
    if(x >= emptyCells.length) {
      return true;
    }
    const { i, j, candidate } = emptyCells[x];
    for(let y = 0; y < candidate.length; y++) {
      if(check(i, j, candidate[y])) {
        board[i][j] = candidate[y];
        const res = dfs(x + 1);
        if(res) {
          return true;
        }
        board[i][j] = '.';
      }
    }
    return false;
  }
  dfs(0);
};
// @lc code=end

