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
  // 思路：快慢指针，快慢相遇之后，慢指针回到头，快慢指针步调一致一起移动，相遇点即为入环点
  if(!head) {
    return null;
  }
  let fast = head.next;
  let slow = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if(fast === slow) {
      // 慢指针重新从头开始移动，快指针从第一次相交点下一个节点开始移动
      fast = head
      slow = slow.next // 注意
      while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  return null;
};
// var detectCycle = function(head) {
//   let pre = head;
//   let fast = head;
//   let slow = head;
//   while(fast && fast.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if(fast === slow) {
//       while(pre !== slow) {
//         pre = pre.next;
//         slow = slow.next;
//       }
//       return slow;
//     }
//   }
//   return null;
// };
// @lc code=end

