/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  const queue = [root];
  let level = 1;
  while(queue.length) {
    level++;
    const len = queue.length;
    for(let i = 0; i < len; i++) {
      const node = queue.shift();
      if(level < d) {
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      } else if(level === d) {
        const { left, right } = node;
        node.left = new TreeNode(v);
        node.left.left = left;
        node.right = new TreeNode(v);
        node.right.right = right;
      }
    }
    if(level === d) {
      return root;
    }
  }
  const node = new TreeNode(v);
  node.left = root;
  return node;
};
// @lc code=end

