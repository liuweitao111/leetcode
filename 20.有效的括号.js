/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const stack = [];
  for(let i = 0; i< s.length; i++) {
    if(['(', '[', '{'].includes(s[i])) {
      stack.push(s[i]);
    } else if(stack.pop() !== map[s[i]]){
      return false;
    }
  }
  if(stack.length === 0) {
    return true;
  }
  return false;
};
// @lc code=end

