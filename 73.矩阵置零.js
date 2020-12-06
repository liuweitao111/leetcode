/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                for(let x = 0; x < m; x++) {
                    if(matrix[x][j] !== 0) {
                        matrix[x][j] = Infinity;
                    }
                }
                for(let y = 0; y < n; y++) {
                    if(matrix[i][y] !== 0) {
                        matrix[i][y] = Infinity;
                    }
                }
            }
        }
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === Infinity) {
                matrix[i][j] = 0;
            }
        }
    }
};
// @lc code=end

