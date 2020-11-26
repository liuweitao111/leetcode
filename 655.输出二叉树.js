/*
 * @lc app=leetcode.cn id=655 lang=javascript
 *
 * [655] 输出二叉树
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
 * @return {string[][]}
 */
var printTree = function(root) {
  const getHeight = (node) => {
    if(!node) {
      return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }
  const height = getHeight(root);
  const width = (2 << (height - 1)) - 1;
  const res = [];
  for(let i = 0; i < height; i++) {
    res[i] = Array(width).fill("");
  }
  const fill = (node, level, start, end) => {
    if(!node) {
      return;
    }
    const mid = (end + start) >> 1;
    res[level][mid] = `${node.val}`;
    fill(node.left, level + 1, start, mid - 1);
    fill(node.right, level + 1, mid + 1, end);
  }
  fill(root, 0, 0, width - 1);
  return res;
};
// @lc code=end

