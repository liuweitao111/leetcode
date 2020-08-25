/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
  const root = new ListNode(null);
  let preNode = root;
  while(head) {
    if(head.next && head.val !== head.next.val) {
      preNode.next = head;
      preNode = preNode.next;
      head = head.next;
    } else if(!head.next) {
      preNode.next = head;
      preNode = preNode.next;
      head = head.next;
    } else {
      const { val } = head;
      while(head && head.val === val) {
        head = head.next;
      }
    }
  }
  if(preNode) {
    preNode.next = null;
  }
  return root.next;
};
// @lc code=end

