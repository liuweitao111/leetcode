/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if(!s || !t) {
    return false;
  }
  const compare = (t1, t2) => {
    if(!t1 && !t2) {
      return true;
    }
    if(!t1 || !t2) {
      return false;
    }
    return t1.val === t2.val && compare(t1.left, t2.left) && compare(t1.right, t2.right);
  }
  const dfs = root => {
    if(!root) {
      return false;
    }
    return compare(root, t) || dfs(root.left) || dfs(root.right);
  }
  return dfs(s);
};
// @lc code=end

