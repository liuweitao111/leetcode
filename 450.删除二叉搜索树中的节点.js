/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  const findNode = (node, parent, pos) => {
    if(!node) {
      return [];
    }
    if(node.val === key) {
      return [ node, parent, pos ];
    }
    if(node.val > key) {
      return findNode(node.left, node, 'left');
    }
    return findNode(node.right, node, 'right');
  }
  const [node, parent, pos] = findNode(root, null, '');
  if(!node) {
    return root;
  }
  if(!parent) {
    if(!node.left && !node.right) {
      return null;
    }
    if(!node.left) {
      return node.right;
    }
    if(!node.right) {
      return node.left;
    }
    let lMostR = node.left;
    while(lMostR.right) {
      lMostR = lMostR.right;
    }
    lMostR.right = node.right;
    return node.left;
  }
  if(!node.left && !node.right) {
    parent[pos] = null;
  } else if(!node.left) {
    parent[pos] = node.right;
  } else if(!node.right) {
    parent[pos] = node.left;
  } else {
    parent[pos] = node.left;
    let lMostR = node.left;
    while(lMostR.right) {
      lMostR = lMostR.right;
    }
    lMostR.right = node.right;
  }
  return root;
};
// @lc code=end

