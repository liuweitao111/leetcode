/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
  const dp1 = new Map(); // 选
  const dp2 = new Map(); // 不选
  dp1.set(null, 0);
  dp2.set(null, 0);
  const dfs = (node) => {
    if(!node) {
      return;
    }
    dfs(node.left);
    dfs(node.right);
    dp1.set(node, dp2.get(node.left) +  dp2.get(node.right) + node.val);
    dp2.set(node, Math.max(dp1.get(node.left), dp2.get(node.left)) + Math.max(dp1.get(node.right), dp2.get(node.right)));
  }
  dfs(root);
  return Math.max(dp1.get(root), dp2.get(root));
};
// @lc code=end

