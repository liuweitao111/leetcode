/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
// var deleteDuplicates = function(head) {
//   let node = head;
//   const root = new ListNode(null);
//   let firstDifferent = root;
//   while(node) {
//     if(node.val !== firstDifferent.val) {
//       firstDifferent.next = node;
//       firstDifferent = node;
//     }
//     node = node.next;
//   }
//   firstDifferent.next = null;
//   return root.next;
// };
var deleteDuplicates = function(head) {
  let current = head;
  while(current && current.next) {
    if(current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
// @lc code=end

