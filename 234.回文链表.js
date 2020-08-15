/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var reverse = function(head) {
  const root = new ListNode();
  let n = head;
  while(n) {
    const tmp = n.next;
    n.next = root.next;
    root.next = n;
    n = tmp;
  }
  return root.next;
}

var isPalindrome = function(head) {
  let slow = head;
  let fast = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 翻转链表
  const middle = reverse(slow);
  let flag = true;
  let n1 = head; 
  let n2 = middle;
  while(n1 && n2) {
    if(n1.val !== n2.val) {
      flag = false;
      break;
    }
    n1 = n1.next;
    n2 = n2.next;
  }
  // 将链表翻转回去
  reverse(middle);
  return flag;
};
// @lc code=end

