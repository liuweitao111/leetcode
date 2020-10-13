/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
const calcItem = (item) => {
  let res = 0;
  let op = '+';
  while(item.length) {
    const ele = item.pop();
    if(['+', '-'].includes(ele)) {
      op = ele;
    } else if(op === '+') {
      res += ele;
    } else {
      res -= ele;
    }
  }
  return res;
}
const isNumber = ele => /[0-9]/.test(ele);
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = `(${s})`;
  const stack = [];
  let i = 0;
  while(i < s.length) {
    if(['+', '-', '('].includes(s[i])) {
      stack.push(s[i]);
    } else if(s[i] === ')') {
      const item = [];
      while(1) {
        const ele = stack.pop();
        if(ele === '(') {
          break;
        }
        item.push(ele);
      }
      stack.push(calcItem(item));
    } else if(isNumber(s[i])){
      let num = '';
      while(isNumber(s[i])) {
        num += s[i];
        i++;
      }
      stack.push(Number(num));
      i--;
    }
    i++;
  }
  return stack.pop();
};
// @lc code=end

