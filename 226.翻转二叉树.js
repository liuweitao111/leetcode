/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const swap = (node) => {
    if(!node) {
      return;
    }
    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    swap(node.left);
    swap(node.right);
  }
  swap(root);
  return root;
};
// @lc code=end

