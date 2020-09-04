/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const result = [];
  const helper = node => {
    if(!node) {
      result.push(null);
      return;
    }
    result.push(node.val);
    helper(node.left);
    helper(node.right);
  }
  if(root) {
    helper(root);
  }
  return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  data = JSON.parse(data);
  if(data.length === 0) {
    return null;
  }
  let i = -1;
  const create = () => {
    i++;
    if(data[i] === null) {
      return null;
    }
    const node = new TreeNode(data[i]);
    node.left = create();
    node.right = create();
    return node;
  }
  return create();
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

