/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let res = 0;
  const findPath = (node, remain) => {
    if(!node) {
      return;
    }
    remain = remain - node.val;
    if(remain === 0) {
      res++;
    }
    findPath(node.left, remain);
    findPath(node.right, remain);
  }
  const stack = [];
  let node = root;
  while(node || stack.length) {
    while(node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    findPath(node, sum);
    node = node.right;
  }
  return res;
};
// @lc code=end

