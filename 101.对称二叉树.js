/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const check = (left, right) => {
    if(!left && !right) {
      return true;
    }
    if((!left && right) || (left && !right)) {
      return false;
    }
    return left.val === right.val 
      && check(left.left, right.right)
      && check(left.right, right.left);
  }
  if(!root) {
    return true;
  }
  return check(root.left, root.right);
};
// @lc code=end

