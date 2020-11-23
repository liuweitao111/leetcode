/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function(root) {
  if(!root) {
    return [];
  }
  const queue = [root];
  const result = [];
  while(queue.length) {
    const len = queue.length;
    let max = -Infinity;
    for(let i = 0; i < len; i++) {
      const node = queue.shift();
      if(max < node.val) {
        max = node.val;
      }
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
    result.push(max);
  }
  return result;
};
// @lc code=end

