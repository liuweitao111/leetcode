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
  // 思路：将链表翻转转化为一个子问题，然后通过递归方式依次解决
  // 先翻转两个，然后将后面的节点继续这样翻转，然后将这些翻转后的节点连接起来
  return helper(head);
}
function helper(head) {
  if(!head || !head.next) {
    return head;
  }
  const nextHead = head.next.next;
  const next = head.next;
  next.next = head;
  head.next = helper(nextHead);
  return next;
}
// var swapPairs = function(head) {
//   const root = new ListNode();
//   root.next = head;
//   let h = root;
//   while(h) {
//     const h1 = h.next;
//     if(!h1) {
//       break;
//     }
//     const h2 = h1.next;
//     if(!h2) {
//       break;
//     }
//     h.next = h1.next;
//     h1.next = h2.next;
//     h2.next = h1;
//     h = h1;
//   }
//   return root.next;
// };
// @lc code=end

