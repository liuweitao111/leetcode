/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const C = (n, m) => {
    if(!m || m === n) {
      return 1;
    }
    if(m > n >> 1) {
      m = n - m;
    }
    let res = 1;
    for(let i = 1; i <= m; i++) {
      res *= (n - i + 1);
      res /= i;
    }
    return res;
  }
  const res = [];
  for(let i = 0; i <= rowIndex; i++) {
    res[i] = C(rowIndex, i);
  }
  return res;
};
// @lc code=end

