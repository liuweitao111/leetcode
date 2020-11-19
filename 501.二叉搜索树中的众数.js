/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {
  let res = [];
  let maxCount = 1;
  let prev = null;
  let count = 1;
  const traverse = (node) => {
    if(!node) {
      return;
    }
    traverse(node.left);
    if(prev === node.val) {
      count++;
      if(maxCount === count) {
        res.push(node.val);
      } else if(maxCount < count) {
        res = [node.val];
        maxCount = count;
      }
    } else {
      count = 1;
      prev = node.val;
      if(maxCount === count) {
        res.push(node.val);
      }
    }
    traverse(node.right);
  }
  traverse(root);
  return res;
};
// @lc code=end

