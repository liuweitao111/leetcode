/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {
//   const rootNode = new ListNode();
//   let nextNode = rootNode;
//   while(l1 && l2) {
//     if(l1.val < l2.val) {
//       nextNode.next = new ListNode(l1.val);
//       nextNode = nextNode.next;
//       l1 = l1.next;
//     } else {
//       nextNode.next = new ListNode(l2.val);
//       nextNode = nextNode.next;
//       l2 = l2.next;
//     }
//   }
//   while(l1) {
//     nextNode.next = new ListNode(l1.val);
//     nextNode = nextNode.next;
//     l1 = l1.next;
//   }
//   while(l2) {
//     nextNode.next = new ListNode(l2.val);
//     nextNode = nextNode.next;
//     l2 = l2.next;
//   }
//   return rootNode.next;
// };
var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode();
  let head = dummy;
  while(l1 && l2) {
    if(l1.val < l2.val) {
      head.next = l1;
      head = head.next;
      l1 = l1.next;
    } else {
      head.next = l2;
      head = head.next;
      l2 = l2.next;
    }
  }
  head.next = l1 ? l1 : l2;
  return dummy.next;
};
// @lc code=end

