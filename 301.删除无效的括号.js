/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let leftRemove = 0, rightRemove = 0;
  for (const c of s) {
    if (c === ')') {
      if (leftRemove > 0) {
        leftRemove--;
      } else {
        rightRemove++;
      }
    } else if (c === '(') {
      leftRemove++;
    }
  }

  const res = new Set();

  const dfs = (i, lCount, rCount, lRemove, rRemove, path) => {
    if (lRemove < 0 || rRemove < 0 || lCount < rCount) {
      return;
    }
    if (i === s.length) {
      if(rRemove === 0 && lRemove === 0) {
        res.add(path.join(''));
      }
    return;
    }
    if (s[i] === '(') {
      dfs(i + 1, lCount, rCount, lRemove - 1, rRemove, path);
    } else if (s[i] === ')') {
      dfs(i + 1, lCount, rCount, lRemove, rRemove - 1, path);
    }
    path.push(s[i]);
    if (s[i] !== '(' && s[i] !== ')') {
      dfs(i + 1, lCount, rCount, lRemove, rRemove, path);
    } else if (s[i] === '(') {
      dfs(i + 1, lCount + 1, rCount, lRemove, rRemove, path);
    } else if (lCount > rCount) {
      dfs(i + 1, lCount, rCount + 1, lRemove, rRemove, path);
    }
    path.pop();
  }

  dfs(0, 0, 0, leftRemove, rightRemove, []);

  return [...res];
};
// @lc code=end
