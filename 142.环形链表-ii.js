/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
    let pre = head;
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) {
        while(pre !== slow) {
          pre = pre.next;
          slow = slow.next;
        }
        return slow;
      }
    }
    return null;
};
// @lc code=end

