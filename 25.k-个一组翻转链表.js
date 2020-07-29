/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
  const root = new ListNode();
  root.next = head;
  let h = root;
  while(h) {
    let interval = k;
    const h1 = h;
    const h2 = h.next;
    while(interval > 0 && h.next) {
      h = h.next;
      interval--;
    }
    if(interval !== 0) {
      break;
    }
    interval = k - 1;
    while(interval > 0 && h2.next) {
      const h3 = h2.next;
      h2.next = h3.next;
      h3.next = h1.next;
      h1.next = h3;
      interval--;
    }
    h = h2;
  }
  return root.next;
};
// @lc code=end

