/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  function traversal(root) {
    if(!root) {
      return;
    }
    traversal(root.left);
    result.push(root.val);
    traversal(root.right);
  }
  traversal(root);
  return result;
};
// @lc code=end

