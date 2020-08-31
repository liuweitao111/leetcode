/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  let postIdx = postorder.length - 1;
  const helper = (inL, inR) => {
    if(inL > inR) {
      return null;
    }
    const root = new TreeNode(postorder[postIdx]);
    let i = inL;
    while(i <= inR) {
      if(inorder[i] === postorder[postIdx]) {
        break;
      }
      i++;
    }
    postIdx--;
    root.right = helper(i + 1, inR);
    root.left = helper(inL, i - 1);
    return root;
  }
  return helper(0, inorder.length - 1);
};
// @lc code=end

