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
  // 统计长度
  while(h !== null) {
    h = h.next;
    length++;
  }
  //设置头指针，保存head
  const root = new ListNode(); 
  root.next = head;
  // 依次增加归并排序归并的链表长度
  for(let seg = 1; seg < length; seg *= 2) {
    let temp = root;
    h = root.next;
    while(h !== null) {
      // 切割出第一段有序链表，链表的头部保存的到h1
      let i = seg;
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
      i = seg;
      let h2 = h; 
      while(i > 0 && h !== null) {
        i--;
        h = h.next;
      }
      let l1 = seg; // 第一段有序链表的长度
      let l2 = seg - i; // 第二段有序链表的长度
      // 合并两段有序链表
      while(l1 > 0 && l2 > 0) {
        if(h1.val < h2.val) {
          temp.next = h1;
          h1 = h1.next;
          l1--;
        } else {
          temp.next = h2;
          h2 = h2.next;
          l2--;
        }
        temp = temp.next;
      }
      temp.next = l1 === 0 ? h2 : h1;
      while(l1 > 0 || l2 > 0) {
        temp = temp.next;
        l1--;
        l2--;
      }
      temp.next = h;
    }
  }
  return root.next;
};
// var sortList = function(head) {
//   const getLen = () => {
//     let len = 0;
//     let next = head;
//     while(next) {
//       len++;
//       next = next.next;
//     }
//     return len;
//   }
//   const len = getLen();
//   const root = new ListNode();
//   for(let seg = 1; seg < len; seg *= 2) {
//     let next = head;
//     let temp = root;
//     while(next) {
//       let start1 = next;
//       let i = 0;
//       while(next && i < seg) {
//         next = next.next;
//         i++;
//       }
//       let end1 = i;
//       i = 0;
//       let start2 = next;
//       while(next && i < seg) {
//         next = next.next;
//         i++;
//       }
//       let end2 = i;
//       while(end1 && end2) {
//         if(start1.val > start2.val) {
//           temp.next = start2;
//           start2 = start2.next;
//           end2--;
//         } else {
//           temp.next = start1;
//           start1 = start1.next;
//           end1--;
//         }
//         temp = temp.next;
//       }
//       while(end1) {
//         temp.next = start1;
//         start1 = start1.next;
//         end1--;
//         temp = temp.next;
//       }
//       while(end2) {
//         temp.next = start2;
//         start2 = start2.next;
//         end2--;
//         temp = temp.next;
//       }
//     }
//     temp.next = null;
//     head = root.next;
//   }
//   return head;
// };
// @lc code=end

