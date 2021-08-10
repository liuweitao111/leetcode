/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill(0).map((i, k) => k);
    this.wight = Array(n).fill(1);
  }

  union(x, y, value) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
      this.wight[rootX] = this.wight[y] * value / this.wight[x];
    }
  }

  find(x) {
    if (x !== this.parent[x]) {
      const origin = this.parent[x];
      this.parent[x] = this.find(this.parent[x]);
      this.wight[x] *= this.wight[origin];
    }
    return this.parent[x];
  }

  isConnected(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      return -1;
    }
    return this.wight[x] / this.wight[y];
  }
}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const map = new Map();
  const union = new UnionFind(equations.length * 2);

  let id = 0;
  for (let i = 0; i < equations.length; i++) {
    const [v1, v2] = equations[i];
    if (!map.has(v1)) {
      map.set(v1, id);
      id++;
    }
    if (!map.has(v2)) {
      map.set(v2, id);
      id++;
    }
    union.union(map.get(v1), map.get(v2), values[i]);
  }

  const res = [];
  for (let i = 0; i < queries.length; i++) {
    const [v1, v2] = queries[i];
    if(!map.has(v1) || !map.has(v1)) {
      res[i] = -1;
    } else {
      res[i] = union.isConnected(map.get(v1), map.get(v2));
    }
  }

  return res;
};
// @lc code=end