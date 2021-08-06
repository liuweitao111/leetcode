/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  const parent = Array(26).fill(0).map((i, k) => k);

  const find = index => {
    while (parent[index] !== index) {
      parent[index] = parent[parent[index]];
      index = parent[index];
    }
    return index;
  }

  const union = (index1, index2) => {
    parent[find(index1)] = find(index2);
  }

  equations.forEach(item => {
    if (item[1] === '=') {
      union(item[0].charCodeAt() - 97, item[3].charCodeAt() - 97);
    }
  });

  for (const item of equations) {
    if (item[1] === '!') {
      if (find(item[0].charCodeAt() - 97) === find(item[3].charCodeAt() - 97)) {
        return false;
      }
    }
  }

  return true;
};
// @lc code=end
console.log(equationsPossible(
  ["a==b","b!=a"]))
