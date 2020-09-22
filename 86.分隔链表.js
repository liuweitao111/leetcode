/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
// var partition = function(head, x) {
//   const root = new ListNode();
//   root.next = head;
//   let lessNode = root;
//   let nextNode = root;
//   while(nextNode.next) {
//     if(nextNode.next.val < x) {
//       if(lessNode.next.val < x) {
//         lessNode= lessNode.next;
//         nextNode = nextNode.next;
//       } else {
//         const tmpNode = nextNode.next;
//         // 删除节点
//         nextNode.next = nextNode.next.next;
//         // 插入节点
//         tmpNode.next = lessNode.next;
//         lessNode.next = tmpNode;
//         lessNode = tmpNode;
//       }
//     } else {
//       nextNode = nextNode.next;
//     }
//   }
//   return root.next;
// };
// var partition = function(head, x) {
//   let beforeHead = new ListNode();
//   let before = beforeHead;
//   let afterHead = new ListNode();
//   let after = afterHead;

//   while(head) {
//     if(head.val < x) {
//       before.next = head;
//       before = before.next;
//     } else {
//       after.next = head;
//       after = after.next;
//     }
//     head = head.next;
//   }
//   after.next = null;
//   before.next = afterHead.next;
//   return beforeHead.next;
// }
var partition = function(head, x) {
  const headDummy = new ListNode();
  const tailDummy = new ListNode();
  let headNode = headDummy;
  let tailNode = tailDummy;
  while(head) {
    if(head.val < x) {
      headNode.next = head;
      headNode = headNode.next;
    } else {
      tailNode.next = head;
      tailNode = tailNode.next;
    }
    head = head.next;
  }
  headNode.next = tailDummy.next;
  tailNode.next = null;
  return headDummy.next;
}
// @lc code=end

