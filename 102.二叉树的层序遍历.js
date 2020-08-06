/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  if(!root) {
    return [];
  }
  const result = [];
  const queue = [];
  queue.push(root);
  let level = 0;
  while(queue.length) {
    const size = queue.length;
    result[level] = [];
    for(let i = 0; i < size; i++) {
      const node = queue.shift();
      result[level].push(node.val);
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
    level++;
  }
  return result;
};
// @lc code=end

