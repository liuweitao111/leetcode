/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
  if(!root) {
    return [];
  }
  const queue = [root];
  const ans = [];
  while(queue.length) {
    const len = queue.length;
    let sum = 0;
    for(let i = 0; i < len; i++) {
      const node = queue.shift();
      sum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ans.push(sum / len);
  }
  return ans;
};
// @lc code=end

