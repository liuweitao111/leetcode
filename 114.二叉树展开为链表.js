/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
var flatten = function(root) {
  let curr = root;
  while(curr) {
    if(curr.left) {
      let next = curr.left;
      let predecessor = curr.left;
      while(predecessor.right) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
};
// @lc code=end
// var flatten = function(root) {
//   const dfs = (n) => {
//     if(!n) {
//       return;
//     }
//     const l = dfs(n.left);
//     const r = dfs(n.right);
//     if(l && r) {
//       n.right = l;
//       let t = n;
//       while(t.right) {
//         t = t.right;
//       }
//       t.right = r;
//     }else if(l) {
//       n.right = l;
//     }
//     n.left = null;
//     return n;
//   }
//   dfs(root);
// };

