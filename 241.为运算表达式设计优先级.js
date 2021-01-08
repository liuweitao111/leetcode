/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  const compute = (n1, n2, op) => {
    switch(op) {
      case '+':
        return n1 + n2;
      case '-':
        return n1 - n2;
      case '*':
        return n1 * n2;
    }
  }
  const num = input.match(/(\d+)/g).map(n => Number(n));
  const op = input.match(/(\+|-|\*)/g);
  const key = (i, j) => `${i}-${j}`;
  const cache = {};
  const helper = (i, j) => {
    if(cache[key(i, j)]) {
      return cache[key(i, j)];
    }
    if(j === i) {
      return [ num[i] ];
    }
    if(j - i === 1) {
      return [ compute(num[i], num[j], op[i]) ];
    }
    const res = [];
    for(let k = i; k < j; k++) {
      const lRes = helper(i, k);
      const rRes = helper(k + 1, j);
      lRes.forEach(l => {
        rRes.forEach(r => {
          res.push(compute(l, r, op[k]));
        });
      });
    }
    cache[key(i, j)] = res;
    return res;
  }
  return helper(0, num.length - 1);
};
// @lc code=end

