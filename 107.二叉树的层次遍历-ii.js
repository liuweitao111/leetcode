/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const queue = [];
  if(!root) {
    return [];
  }
  const result = [];
  queue.push(root);
  while(queue.length) {
    let size = queue.length;
    const levelResult = [];
    for(let i = 0; i < size; i++) {
      const node = queue.shift();
      levelResult.push(node.val);
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
    result.unshift(levelResult);
  }
  return result;
};
// @lc code=end

