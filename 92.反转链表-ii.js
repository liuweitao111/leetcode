/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// var reverseBetween = function(head, m, n) {
//   if(!head) {
//     return head;
//   }
//   const root = new ListNode();
//   root.next = head;
//   let node = root;
//   let i = 0;
//   while(++i < m) {
//     node = node.next;
//   }
//   let prev = null;
//   const start = node;
//   const end = node.next;
//   while(i++ <= n + 1) {
//     const temp = node.next;
//     node.next = prev;
//     prev = node;
//     node = temp;
//   }
//   start.next = prev;
//   end.next = node;
//   return root.next;
// };
var reverseBetween = function (head, m, n) {
  if (!head) {
    return head;
  }
  // 思路：先遍历到m处，翻转，再拼接后续，注意指针处理
  // 输入: 1->2->3->4->5->null, m = 2, n = 4
  const dummy = new ListNode(0);
  dummy.next = head;
  head = dummy;
  let i = 0;
  let pre;
  // 最开始：0->1->2->3->4->5->null
  while (i < m) {
    pre = head;
    head = head.next;
    i++;
  }
  // 遍历之后： 1(pre)->2(head)->3->4->5->null
  // i = 1
  let next;
  // 用于中间节点连接
  let mid = head;
  while (head !== null && i <= n) {
    // 第一次循环： 1 nil<-2 3->4->5->null
    const temp = head.next;
    head.next = next;
    next = head;
    head = temp;
    i++;
  }
  // 循环需要执行四次
  // 循环结束：1 null<-2<-3<-4 5(head)->null
  pre.next = next;
  mid.next = head;
  return dummy.next;
};
// @lc code=end

