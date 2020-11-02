/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if(n === 0) {
    return [];
  }
  return generate(1, n);
};

function generate(start, end) {
  if(start > end) {
    return [null];
  }
  const res = [];
  for(let i = start; i <= end; i++) {
    const left = generate(start, i - 1);
    const right = generate(i + 1, end);
    for(let j = 0; j < left.length; j++) {
      for(let k = 0; k < right.length; k++) {
        res.push(new TreeNode(i, left[j], right[k]));
      }
    }
  }
  return res;
}
// var generateTrees = function(n) {
//   const helper = (start, end) => {
//     if(start > end) {
//       return [null];
//     }
//     const res = [];
//     for(let i = start; i <= end; i++) {
//       const l = helper(start, i - 1);
//       const r = helper(i + 1, end);
//       l.forEach(lRes => {
//         r.forEach(rRes => {
//           res.push(new TreeNode(i, lRes, rRes))
//         })
//       });
//     }
//     return res;
//   };
//   if(n === 0) {
//     return [];
//   }
//   return helper(1, n);
// };
// @lc code=end

