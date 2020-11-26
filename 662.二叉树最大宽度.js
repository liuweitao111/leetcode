/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  const queue = [{
    node: root,
    pos: 0,
  }];
  let max = 0;
  while(queue.length) {
    const len = queue.length;
    let l = queue[0].pos;
    let r = queue[len - 1].pos;
    max = Math.max(max, r - l + 1);
    for(let i = 0; i < len; i++) {
      let { node, pos } = queue.shift();
      if(len === 1) {
        pos = 0;
      }
      node.left && queue.push({ node: node.left, pos: 2 * pos});
      node.right && queue.push({ node: node.right, pos: 2 * pos + 1});
    }
  }
  return max;
};
// @lc code=end

