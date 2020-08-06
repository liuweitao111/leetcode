/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) {
    return 0;
  }
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);
  if(leftDepth === 0) {
    return rightDepth + 1;
  }
  if(rightDepth === 0) {
    return leftDepth + 1;
  }
  return Math.min(leftDepth, rightDepth) + 1;
};
// @lc code=end

