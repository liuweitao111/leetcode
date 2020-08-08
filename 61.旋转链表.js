/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(!head) {
    return head;
  }
  let slow = head;
  let fast = head;
  while(k--) {
    fast = fast.next || head;
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  fast.next = head;
  head = slow.next;
  slow.next = null;
  return head;
};
// @lc code=end

