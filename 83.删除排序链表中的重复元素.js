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
var deleteDuplicates = function(head) {
  let node = head;
  const root = new ListNode(null);
  let firstDifferent = root;
  while(node) {
    if(node.val !== firstDifferent.val) {
      firstDifferent.next = node;
      firstDifferent = node;
    }
    node = node.next;
  }
  firstDifferent.next = null;
  return root.next;
};
// @lc code=end

