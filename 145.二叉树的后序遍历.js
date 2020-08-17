/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  // const result = [];
  // const traversal = node => {
  //   if(!node) {
  //     return;
  //   }
  //   traversal(node.left);
  //   traversal(node.right);
  //   result.push(node.val);
  // }
  // traversal(root);
  // return result;
  if(!root) {
    return [];
  }
  const result = [];
  const stack = [];
  stack.push(root);
  while(stack.length) {
    const node = stack.pop();
    result.unshift(node.val);
    if(node.left) {
      stack.push(node.left);
    }
    if(node.right) {
      stack.push(node.right);
    }
  }
  return result;
};
// @lc code=end

