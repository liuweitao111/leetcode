/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
//   }
// }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let sum: number = 0;
  let carry:number = 0;
  const rootNode: ListNode = new ListNode();
  let nextNode = rootNode;
  while(l1 && l2) {
    sum = l1.val + l2.val + carry;
    carry = Math.floor(sum / 10);
    nextNode.next = new ListNode(sum % 10);
    nextNode = nextNode.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  while(l1) {
    sum = l1.val + carry;
    carry = Math.floor(sum / 10);
    nextNode.next = new ListNode(sum % 10);
    nextNode = nextNode.next;
    l1 = l1.next;
  }
  while(l2) {
    sum = l2.val + carry;
    carry = Math.floor(sum / 10);
    nextNode.next = new ListNode(sum % 10);
    nextNode = nextNode.next;
    l2 = l2.next;
  }
  if(carry) {
    nextNode.next = new ListNode(carry);
  }
  return rootNode.next;
};
// @lc code=end

