/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if(!head) {
    return;
  }
  let fast = head.next;
  let slow = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let h = slow.next
  slow.next = null;
  const h1 = new ListNode();
  while(h) {
    const tmp = h1.next;
    const next = h.next;
    h1.next = h;
    h1.next.next = tmp;
    h = next;
  }
  h = h1.next;
  while(head && h) {
    const tmp1 = head.next;
    const tmp2 = h.next;
    head.next = h;
    head.next.next = tmp1;
    head = tmp1;
    h = tmp2;
  }
};
// @lc code=end

