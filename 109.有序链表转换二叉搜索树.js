/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const getLength = () => {
    let h = head;
    let len = 0;
    while(h) {
      h = h.next;
      len++;
    }
    return len;
  }
  const buildTree = (l, r) => {
    if(l > r) {
      return null;
    }
    const mid = Math.floor((l + r + 1) / 2);
    const node = new TreeNode();
    node.left = buildTree(l, mid - 1);
    node.val = head.val;
    head = head.next;
    node.right = buildTree(mid + 1, r);
    return node;
  }
  return buildTree(0, getLength() - 1);
};
// @lc code=end

