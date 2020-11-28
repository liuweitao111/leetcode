/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const list = [];
  if(!matrix || !matrix.length || !matrix[0].length) {
    return list;
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  let left = 0, right = cols - 1, top = 0, bottom = rows - 1;
  while(left <= right && top <= bottom) {
    for(let col = left; col <= right; col++) {
      list.push(matrix[top][col]);
    }
    for(let row = top + 1; row <= bottom; row++) {
      list.push(matrix[row][right]);
    }
    if(left < right && top < bottom) {
      for(let col = right - 1; col > left; col--) {
        list.push(matrix[bottom][col]);
      }
      for(let row = bottom; row > top; row--) {
        list.push(matrix[row][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return list;
}
// @lc code=end
// var spiralOrder = function(matrix) {
//   const row = matrix.length - 1;
//   if(row < 0) {
//     return [];
//   }
//   const col = matrix[0].length - 1;
//   const ans = [];
//   const helper = (x1, y1, x2, y2) => {
//     let x = x1, y = y1;
//     if(x1 === x2) {
//       while(y <= y2) {
//         ans.push(matrix[x][y]);
//         y++;
//       }
//     } else if(y1 === y2) {
//       while(x <= x2) {
//         ans.push(matrix[x][y]);
//         x++;
//       }
//     } else {
//       while(y < y2) {
//         ans.push(matrix[x][y]);
//         y++;
//       }
//       while(x < x2) {
//         ans.push(matrix[x][y]);
//         x++;
//       }
//       while(y > y1) {
//         ans.push(matrix[x][y]);
//         y--;
//       }
//       while(x > x1) {
//         ans.push(matrix[x][y]);
//         x--;
//       }
//     }
//   }
//   let i = 0, j = 0;
//   while(row >> 1 >= i && col >> 1 >= j) {
//     console.log(i, j, row - i, col - j);
//     helper(i, j, row - i, col - j);
//     i++;
//     j++;
//   }
//   return ans;
// };
