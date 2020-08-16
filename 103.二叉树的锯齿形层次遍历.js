/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function(root) {
  if(!root) {
    return [];
  }
  const result = [];
  const stack1 = [];
  const stack2 = [];
  stack1.push(root);
  let size = 0;
  let level = 0;
  while(stack1.length || stack2.length) {
    result[level] = [];
    if(stack1.length) {
      size = stack1.length;
      for(let i = 0; i < size; i++) {
        const node = stack1.pop();
        result[level].push(node.val);
        if(node.left) {
          stack2.push(node.left);
        }
        if(node.right) {
          stack2.push(node.right);
        }
      }
    } else {
      size = stack2.length;
      for(let i = 0; i < size; i++) {
        const node = stack2.pop();
        result[level].push(node.val);
        if(node.right) {
          stack1.push(node.right);
        }
        if(node.left) {
          stack1.push(node.left);
        }
      }
    }
    level++;
  }
  return result;
};
// @lc code=end

