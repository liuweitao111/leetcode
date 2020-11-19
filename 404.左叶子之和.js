/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
  if(!root) {
    return 0;
  }
  const helper = (node, isLeft) => {
    if(!node.left && !node.right && isLeft) {
      return node.val;
    }
    let sum = 0;
    if(node.left) {
      sum += helper(node.left, true);
    }
    if(node.right) {
      sum += helper(node.right, false);
    }
    return sum;
  }
  return helper(root, false);
};
// @lc code=end

