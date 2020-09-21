/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// var reverseList = function(head) {
//   if(!head || !head.next) {
//     return head;
//   }
//   const p = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return p;
// };
var reverseList = function(head) {
  let prev = null;
  while(head) {
    // 保存当前head.Next节点，防止重新赋值后被覆盖
    // 一轮之后状态：nil<-1 2->3->4
    //              prev   head
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
};
// @lc code=end

