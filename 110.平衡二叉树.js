/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  const helper = node => {
    if(!node) {
      return 0;
    }
    const l = helper(node.left);
    const r = helper(node.right);
    if(l === -1 || r === -1 || Math.abs(l - r) > 1) {
      return -1;
    }
    return Math.max(l, r) + 1;
  }
  return helper(root) !== -1;
};
// var isBalanced = function(root) {
//   const helper = node => {
//     if(!node) {
//       return 0;
//     }
//     const l = helper(node.left);
//     const r = helper(node.right);
//     if(l === - 1 || r === -1 || Math.abs(l - r) > 1) {
//       return -1;
//     }
//     return Math.max(l, r) + 1;
//   }
//   return helper(root) !== -1;
// };
// @lc code=end

