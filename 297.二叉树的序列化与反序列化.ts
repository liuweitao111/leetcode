/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const res = [];
  const helper = (node: TreeNode) => {
    if(!node) {
      res.push('NaN');
      return;
    }
    res.push(node.val);
    helper(node.left);
    helper(node.right);
  }
  helper(root);
  return res.join(',');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const values = data.split(',');
  const helper = () => {
    if(values[0] === 'NaN') {
      values.shift();
      return null;
    }
    const root = new TreeNode(parseInt(values[0]));
    values.shift();
    root.left = helper();
    root.right = helper();

    return root;
  }
  return helper();
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

