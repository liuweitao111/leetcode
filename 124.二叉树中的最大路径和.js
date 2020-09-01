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
  if(!root) {
    return 0;
  }
  let max = -Infinity;
  const maxSingleBranchSum = node => {
    if(!node) {
      return 0;
    }
    const left = maxSingleBranchSum(node.left);
    const right = maxSingleBranchSum(node.right);
    max = Math.max(
      max,
      node.val,
      left + node.val,
      right + node.val,
      left + right + node.val
    );
    if(node.left && max < left) {
      max = left;
    }
    if(node.right && max < right) {
      max = right;
    }
    return Math.max(left, right, 0) + node.val;
  }
  maxSingleBranchSum(root);
  return max;
};
// @lc code=end

