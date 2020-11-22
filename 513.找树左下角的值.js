/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  const queue = [root];
  let node;
  while(queue.length) {
    node = queue.shift();
    if(node.right) {
      queue.push(node.right);
    }
    if(node.left) {
      queue.push(node.left);
    }
  }
  return node.val;
};
// var findBottomLeftValue = function(root) {
//   const queue = [root];
//   let mostLeft;
//   while(queue.length) {
//     mostLeft = queue[0].val;
//     let len = queue.length;
//     let i = 0;
//     while(i++ < len) {
//       const node = queue.shift();
//       if(node.left) {
//         queue.push(node.left);
//       }
//       if(node.right) {
//         queue.push(node.right);
//       }
//     }
//   }
//   return mostLeft;
// };
// @lc code=end

