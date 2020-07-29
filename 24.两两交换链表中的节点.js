/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const root = new ListNode();
  root.next = head;
  let h = root;
  while(h) {
    const h1 = h.next;
    if(!h1) {
      break;
    }
    const h2 = h1.next;
    if(!h2) {
      break;
    }
    h.next = h1.next;
    h1.next = h2.next;
    h2.next = h1;
    h = h1;
  }
  return root.next;
};
// @lc code=end

