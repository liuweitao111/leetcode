/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root) {
    return root;
  }
  let leftMost = root;
  while(leftMost.left) {
    let node = leftMost;
    while(node) {
      node.left.next = node.right;
      if(node.next) {
        node.right.next = node.next.left;
      }
      node = node.next;
    }
    leftMost = leftMost.left;
  }
  return root;
};
// // @lc code=end
// var connect = function(root) {
//   const queue = [];
//   if(!root) {
//     return root;
//   }
//   queue.push(root);
//   while(queue.length) {
//     const size = queue.length;
//     let pre = null;
//     for(let i = 0; i < size; i++) {
//       const node = queue.shift();
//       if(pre) {
//         pre.next = node;
//       }
//       pre = node;
//       if(node.left) {
//         queue.push(node.left);
//       }
//       if(node.right) {
//         queue.push(node.right);
//       }
//     }
//   }
//   return root;
// };

