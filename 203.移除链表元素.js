/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const root = new ListNode();
  root.next = head;
  let prev = root;
  while(prev && prev.next) {
    if(prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return root.next;
};
// @lc code=end

