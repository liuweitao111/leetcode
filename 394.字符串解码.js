/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  const len = s.length;

  let i = 0;

  while (i < len) {
    if (/\d/.test(s[i])) {
      let num = '';
      while (/\d/.test(s[i])) {
        num += s[i];
        i++;
      }
      stack.push(num);
    } else if (s[i] === '[') {
      i++;
    } else if (s[i] === ']') {
      const strArr = [];
      while(isNaN(stack[stack.length - 1])) {
        strArr.push(stack.pop());
      }
      const str = strArr.reverse().join('');
      const num = Number(stack.pop());
      let res = '';
      for (let i = 0; i < num; i++) {
        res += str;
      }
      stack.push(res);
      i++;
    } else {
      let str = '';
      while(/[^\[\]0-9]/.test(s[i]) && i < len) {
        str += s[i];
        i++;
      }
      stack.push(str);
    }
  }

  return stack.join('');
};