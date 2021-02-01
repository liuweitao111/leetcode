/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const chNum = {};
  for(const ch of s) {
    chNum[ch] = (chNum[ch] || 0) + 1;
  }
  const inStack = new Set();
  const stack = [];
  for(const ch of s) {
    chNum[ch]--;
    if(inStack.has(ch)) {
      continue;
    }
    while(stack.length && stack[stack.length - 1] > ch && chNum[stack[stack.length - 1]] > 0) {
      const c = stack.pop();
      inStack.delete(c);
    }
    inStack.add(ch);
    stack.push(ch);
  }
  return stack.join('');
};
// @lc code=end

