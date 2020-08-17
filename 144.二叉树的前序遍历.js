/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  const stack = [];
  const result = [];
  while(stack.length || root) {
    while(root) {
      result.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return result;
};
// @lc code=end

