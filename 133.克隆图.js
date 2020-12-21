/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if(!node) {
    return node;
  }
  const visited = new Map();
  const queue = [];
  queue.push(node);
  visited.set(node, new Node(node.val));
  while(queue.length) {
    const n = queue.shift();
    n.neighbors.forEach(b => {
      if(!visited.get(b)) {
        visited.set(b, new Node(b.val));
        queue.push(b);
      }
      visited.get(n).neighbors.push(visited.get(b));
    });
  }
  return visited.get(node);
};
// @lc code=end

