/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const rootNode = new ListNode();
  rootNode.next = head;
  let slow = rootNode;
  let fast = head;
  while(n > 0) {
    fast = fast.next;
    n--;
  }
  while(fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return rootNode.next;
};
// @lc code=end

