/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const sumMap = new Map();
  const computeSum = node => {
    if(!node) {
      return 0;
    }
    const sum = node.val + computeSum(node.left) + computeSum(node.right);
    if(sumMap.has(sum)) {
      sumMap.set(sum, sumMap.get(sum) + 1);
    } else {
      sumMap.set(sum, 1);
    }
    return sum;
  }
  computeSum(root);
  let frequentSum = [];
  let max = 0;
  for(const k of sumMap.keys()) {
    const v = sumMap.get(k);
    if(v > max) {
      max = v;
      frequentSum = [k];
    } else if(v === max) {
      frequentSum.push(k);
    }
  }
  return frequentSum;
};
// @lc code=end

