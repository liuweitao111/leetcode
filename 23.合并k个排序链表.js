/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let newLists = lists.filter(l => l);
  const root = new ListNode();
  let next = root;
  while(newLists.length > 0) {
    let minIndex = 0;
    newLists.forEach((l, i)=> {
      if(newLists[minIndex].val > l.val) {
        minIndex = i;
      }
    });
    next.next = new ListNode(newLists[minIndex].val);
    newLists[minIndex] = newLists[minIndex].next;
    next = next.next;
    newLists = newLists.filter(l => l);
  }
  return root.next;
};
// @lc code=end

