/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  const findPath = (r, s) => {
    if(!r) {
      return false;
    }
    if(!r.left && !r.right) {
      return s === r.val;
    }
    return findPath(r.left, s - r.val) || findPath(r.right, s - r.val);
  }
  return findPath(root, sum);
};
// @lc code=end

