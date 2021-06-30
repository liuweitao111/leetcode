/*
 * @lc app=leetcode.cn id=815 lang=typescript
 *
 * [815] 公交路线
 */

// @lc code=start
function numBusesToDestination(routes: number[][], source: number, target: number): number {
  if(source === target) {
    return 0;
  }

  const n = routes.length;
  // 表示公交是否可以相互换乘
  const edges: boolean[][] = Array(n).fill(0).map(() => Array(n).fill(0));
  // 存储每个站点的公交路线
  const siteMap = new Map<number, number[]>();

  // 建图
  for(let i = 0; i < n; i++) {
    const route = routes[i];
    for(const site of route) {
      const list = siteMap.get(site) || [];
      for(const j of list) {
        edges[j][i] = edges[i][j] = true;
      }
      list.push(i);
      siteMap.set(site, list);
    }
  }

  // 遍历 source到每一站的最小换乘数量。
  const dis: number[] = Array(n).fill(Infinity);
  const queue: number[] = [];
  for(const item of (siteMap.get(source) || [])) {
    dis[item] = 1;
    queue.push(item);
  }
  while(queue.length) {
    const x = queue.shift();
    for(let y = 0; y < edges[x].length; y++) {
      if(edges[x][y] && dis[y] === Infinity) {
        dis[y] = dis[x] + 1;
        queue.push(y);
      }
    }
  }

  let res = Infinity;
  for(const item of (siteMap.get(target) || [])) {
    res = Math.min(res, dis[item]);
  }
  return res === Infinity ? -1 : res;
};
// @lc code=end

