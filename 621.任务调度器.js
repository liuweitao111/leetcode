/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const map = {};
  for (let i = 0; i < tasks.length; i++) {
    map[tasks[i]] = (map[tasks[i]] || 0) + 1;
  }

  let time = 0;
  const queue = [];

  const order = Object.entries(map).sort((a, b) => b[1] - a[1]);

  while (order.length) {
    const i = order.findIndex(item => !queue.includes(item[0]));
    if (i === -1) {
      queue.push('');
      if(queue.length > n) {
        queue.shift();
      }
    } else {
      queue.push(order[i][0]);
      if(queue.length > n) {
        queue.shift();
      }
      order[i][1]--;
      if (order[i][1] === 0) {
        order.splice(i, 1);
      }
      order.sort((a, b) => b[1] - a[1]);
    }
    time++;
  }

  return time;
};
// @lc code=end
