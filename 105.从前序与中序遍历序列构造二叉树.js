/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const build = (preLeft, preRight, inLeft, inRight) => {
    if(preLeft > preRight) {
      return null;
    }
    const root = new TreeNode(preorder[preLeft]);
    const index = inorder.indexOf(preorder[preLeft]);
    root.left = build(preLeft + 1, preLeft + (index - inLeft), inLeft, index);
    root.right = build(preLeft + (index - inLeft) + 1, preRight, index + 1, inRight);
    return root;
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end
// var buildTree = function(preorder, inorder) {
//   let i = 0;
//   const helper = order => {
//     const index = order.indexOf(preorder[i]);
//     const root = new TreeNode(preorder[i]);
//     i++;
//     const left = order.slice(0, index);
//     const right = order.slice(index+1);
//     if(!left.length) {
//       root.left = null;
//     } else {
//       root.left = helper(left);
//     }
//     if(!right.length) {
//       root.right = null;
//     } else {
//       root.right = helper(right);
//     }
//     return root;
//   }
//   if(!preorder.length) {
//     return null;
//   }
//   return helper(inorder);
// };
