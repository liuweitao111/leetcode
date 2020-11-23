/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
  let min = Infinity;
  let prev = -Infinity;
  const helper = node => {
    if(!node) {
      return;
    }
    helper(node.left);
    if(node.val - prev < min) {
      min = node.val - prev;
    }
    prev = node.val;
    helper(node.right);
  }
  helper(root);
  return min;
};
// @lc code=end

