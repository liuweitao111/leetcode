/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  let i = 0;
  while(i < path.length) {
    while(path[i] === '/') {
      i++;
    }
    let name = '';
    while(path[i] !== '/' && i < path.length) {
      name += path[i];
      i++;
    }
    if(name === '..') {
      stack.pop();
    } else if(name !== '.' && name !== '') {
      stack.push(name);
    }
  }
  return '/' + stack.join('/');
};
// @lc code=end

