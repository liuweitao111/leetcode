/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const result = [];
  const findPath = (r, s, p) => {
    if(!r) {
      return;
    }
    p = p.concat(r.val);
    if(!r.left && !r.right && r.val === s) {
      result.push(p);
    }
    findPath(r.left, s - r.val, p);
    findPath(r.right, s - r.val, p);
  }
  findPath(root, sum, []);
  return result;
};
// @lc code=end

