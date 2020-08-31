/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
    return null;
  }
  const findFarLeft = node => {
    while(node) {
      if(node.left) {
        return node.left;
      }
      if(node.right) {
        return node.right;
      }
      node = node.next;
    }
    return null;
  }
  let farLeftNode = root;
  while(farLeftNode) {
    let node = farLeftNode;
    let pre = new Node();
    while(node) {
      if(node.left) {
        pre.next = node.left;
        pre = pre.next;
      }
      if(node.right) {
        pre.next = node.right;
        pre = pre.next;
      }
      node = node.next;
    }
    pre.next = null;
    farLeftNode = findFarLeft(farLeftNode);
  }
  return root;
};
// @lc code=end

