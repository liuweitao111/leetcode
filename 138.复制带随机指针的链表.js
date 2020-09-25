/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// var copyRandomList = function(head) {
//   const nodeMap = new Map();
//   const getCloneNode = node => {
//     let cloneNode = nodeMap.get(node);
//     if(!cloneNode) {
//       cloneNode = new Node(node.val);
//       nodeMap.set(node, cloneNode);
//     }
//     return cloneNode;
//   }
//   const root = new Node();
//   let nextNode = root;
//   while(head) {
//     const cloneNode = getCloneNode(head);
//     cloneNode.random = head.random && getCloneNode(head.random);
//     nextNode.next = cloneNode;
//     nextNode = nextNode.next;
//     head = head.next;
//   }
//   nextNode.next = null;
//   return root.next;
// };
var copyRandomList = function(head) {
  if(!head) {
    return head;
  }
  let prev = head;
  // Creating a new weaved list of original and copied nodes.
  while(prev) {
    // Cloned node
    const cloneNode = new Node(prev.val);
    // Inserting the cloned node just next to the original node.
    // If A->B->C is the original linked list,
    // Linked list after weaving cloned nodes would be A->A'->B->B'->C->C'
    cloneNode.next = prev.next;
    prev.next = cloneNode;
    prev = prev.next.next;
  }
  prev = head;
  // Now link the random pointers of the new nodes created.
  // Iterate the newly created list and use the original nodes' random pointers,
  // to assign references to random pointers for cloned nodes.
  while(prev) {
    prev.next.random = prev.random && prev.random.next;
    prev = prev.next.next;
  }
  prev = head;
  // Unweave the linked list to get back the original linked list and the cloned list.
  // i.e. A->A'->B->B'->C->C' would be broken to A->B->C and A'->B'->C'
  const cloneHead = new Node(); // A'->B'->C'
  let clonePrev = cloneHead;
  while(prev) {
    // Add cloned node to new linked list
    clonePrev.next = prev.next;
    // Delete cloned node pointers in original node
    prev.next = prev.next.next;
    
    prev = prev.next;
    clonePrev = clonePrev.next;
  }
  clonePrev.next = null;
  return cloneHead.next;
};
// @lc code=end

