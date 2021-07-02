/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const edges = Array(numCourses).fill(null).map(() => []);
  const degrees = Array(numCourses).fill(0);
  for(const [i, j] of prerequisites) {
    edges[j].push(i);
    degrees[i]++;
  }

  const queue = [];
  for(let i = 0; i < numCourses; i++) {
    if(degrees[i] === 0) {
      queue.push(i);
    }
  }

  const order = [];
  while(queue.length) {
    const node = queue.shift();
    order.push(node);
    for(const item of edges[node]) {
      degrees[item]--;
      if(degrees[item] === 0) {
        queue.push(item);
      }
    }
  }

  return order.length === numCourses ? order : [];
};
// @lc code=end