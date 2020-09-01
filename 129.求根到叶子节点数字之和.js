/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
 * @return {number}
 */
var sumNumbers = function(root) {
  if(!root) {
    return 0;
  }
  let sum = 0;
  const helper = (node, num) => {
    const newNum = num * 10 + node.val;
    if(!node.left && !node.right) {
      sum += newNum;
    }
    if(node.left) {
      helper(node.left, newNum);
    }
    if(node.right) {
      helper(node.right, newNum);
    }
  }
  helper(root, 0);
  return sum;
};
// @lc code=end

