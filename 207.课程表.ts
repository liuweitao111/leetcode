/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const edges: number[][] = Array(numCourses).fill(null).map(() => []);
  const degrees: number[] = Array(numCourses).fill(0);
  for(const [i, j] of prerequisites) {
    edges[j].push(i);
    degrees[i]++;
  }
  let count = 0;
  const queue = [];
  for(let i = 0; i < numCourses; i++) {
    if(degrees[i] === 0) {
      queue.push(i);
    }
  }
  while(queue.length) {
    count++;
    const node = queue.shift();
    for(const item of edges[node]) {
      degrees[item]--;
      if(degrees[item] === 0) {
        queue.push(item);
      }
    }
  }

  return count === numCourses;
};
// @lc code=end

