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
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 数组转链表
function arrayToList(data=[]) {
  const root = new ListNode();
  let next = root;
  data.forEach(val => {
    next.next = new ListNode(val);
    next = next.next;
  });
  return root.next;
}

// 链表转数组
function listToArray(head) {
  const result = [];
  while(head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

var deleteDuplicates = function(head) {
  let node = head;
  const root = new ListNode();
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

