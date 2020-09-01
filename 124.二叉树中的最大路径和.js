/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
  let max = -Infinity;
  const maxSum = node => {
    if(!node) {
      return 0;
    }
    const left = Math.max(maxSum(node.left), 0);
    const right = Math.max(maxSum(node.right), 0);
    const newSum = left + right + node.val;
    if(newSum > max) {
      max = newSum;
    }
    return Math.max(left, right) + node.val;
  }
  maxSum(root);
  return max;
};
// @lc code=end

