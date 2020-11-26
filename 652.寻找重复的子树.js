/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const uidMap = {};
  const ans = [];
  const lookup = node => {
    if(!node) {
      return '';
    }
    const uid = [node.val, lookup(node.left), lookup(node.right)].join('#');
    uidMap[uid] = uidMap[uid] ? uidMap[uid] + 1 : 1;
    if(uidMap[uid] === 2) {
      ans.push(node);
    }
    return uid;
  }
  lookup(root);
  return ans;
};
// @lc code=end

