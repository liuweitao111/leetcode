/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  let tiltSum = 0;
  const helper = (node) => {
    if(!node) {
      return 0;
    }
    const l = helper(node.left);
    const r = helper(node.right);
    tiltSum += Math.abs(l - r);
    return l + r + node.val;
  }
  helper(root);
  return tiltSum;
};
// @lc code=end

