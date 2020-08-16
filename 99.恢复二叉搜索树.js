/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  const stack = [];
  let x = null;
  let y = null;
  let prev = null;
  while(stack.length || root) {
    while(root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if(prev && prev.val > root.val) {
      y = root;
      if(x === null) {
        x = prev;
      } else {
        break;
      }
    }
    prev = root;
    root = root.right;
  }
  [x.val, y.val] = [y.val, x.val];
};
// @lc code=end

