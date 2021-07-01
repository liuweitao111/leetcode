function numWays(n: number, relation: number[][], k: number): number {
  const edges: Set<number>[] = Array(n).fill(0).map(() => new Set);
  // 生成图
  for(const item of relation) {
    const [i, j] = item;
    edges[i].add(j);
  }
  let queue: number[] = [0];
  let step = 0;
  while(queue.length && step++ < k) {
    let len = queue.length;
    while(len--) {
      const node = queue.shift() as number;
      queue = queue.concat([...edges[node]]);
    }
  }
  return queue.filter(node => node === n - 1).length;
};