/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
// 只用归并排序
var sortList = function(head) {
  let h = head;
  let length = 0;
  let interval = 1;
  // 统计长度
  while(h !== null) {
    h = h.next;
    length++;
  }
  //设置头指针，保存head
  const result = new ListNode(); 
  result.next = head;
  // 依次增加归并排序归并的链表长度
  while(interval < length) {
    let preNode = result;
    h = result.next;
    while(h !== null) {
      // 切割出第一段有序链表，链表的头部保存的到h1
      let i = interval;
      let h1 = h; 
      while(i > 0 && h !== null) {
        i--;
        h = h.next;
      }
      // 如果第一段的长度不足interval，则不需要合并，直接跳出
      if(i > 0) {
        break;
      }
      // 切割出第二段有序链表，链表的头部保存的到h2
      i = interval;
      let h2 = h; 
      while(i > 0 && h !== null) {
        i--;
        h = h.next;
      }
      let l1 = interval; // 第一段有序链表的长度
      let l2 = interval - i; // 第二段有序链表的长度
      // 合并两段有序链表
      while(l1 > 0 && l2 > 0) {
        if(h1.val < h2.val) {
          preNode.next = h1;
          h1 = h1.next;
          l1--;
        } else {
          preNode.next = h2;
          h2 = h2.next;
          l2--;
        }
        preNode = preNode.next;
      }
      preNode.next = l1 === 0 ? h2 : h1;
      while(l1 > 0 || l2 > 0) {
        preNode = preNode.next;
        l1--;
        l2--;
      }
      preNode.next = h;
    }
    interval *= 2;
  }
  return result.next;
};
// @lc code=end

