/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  const findMaxIdx = (s, e) => {
    let maxIdx = s;
    for(let i = s; i <= e; i++) {
      if(nums[i] > nums[maxIdx]) {
        maxIdx = i;
      }
    }
    return maxIdx;
  }
  const build = (s, e) => {
    if(s > e) {
      return null;
    }
    const maxIdx = findMaxIdx(s, e);
    const node = new TreeNode(nums[maxIdx]);
    node.left = build(s, maxIdx - 1);
    node.right = build(maxIdx + 1, e);
    return node;
  }
  return build(0, nums.length - 1);
};
// @lc code=end

