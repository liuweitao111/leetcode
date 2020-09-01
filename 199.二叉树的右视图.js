/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
  if(!root) {
    return [];
  }
  const view = [];
  const queue = [];
  queue.push(root);
  while(queue.length) {
    const size = queue.length;
    let node = null;
    for(let i = 0; i < size; i++) {
      node = queue.shift();
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
    view.push(node.val);
  }
  return view;
};
// @lc code=end

