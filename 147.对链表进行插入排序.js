/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
  let n = head;
  const r = new ListNode();
  while (n) {
    let t = r;
    while (t.next) {
      if (t.next.val >= n.val) {
        break;
      }
      t = t.next;
    }
    const newNode = new ListNode(n.val);
    newNode.next = t.next;
    t.next = newNode;
    n = n.next;
  }
  return r.next;
};
// @lc code=end
