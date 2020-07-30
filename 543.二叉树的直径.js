/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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


var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  const maxDepth = root => {
    if(!root) {
      return 0;
    }
    const l = maxDepth(root.left);
    const r = maxDepth(root.right);
    if(diameter < l + r) {
      diameter = l + r;
    }
    return Math.max(l, r) + 1;
  };
  maxDepth(root);
  return diameter;
};
// @lc code=end

