/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(!root) {
    return [];
  }
  const result = [];
  const helper = (node, path) => {
    path = path ? `${path}->${node.val}` : `${node.val}`;
    if(node.left) {
      helper(node.left, path);
    }
    if(node.right) {
      helper(node.right, path);
    }
    if(!node.left && !node.right) {
      result.push(path);
    }
  }
  helper(root);
  return result;
};
// @lc code=end

