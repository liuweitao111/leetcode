/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const op = ['+', '-', '*', '/'];
  const calc = (num1, num2, op) => {
    switch(op) {
      case '+': 
        return num1 + num2;
      case '-': 
        return num1 - num2;
      case '*': 
        return num1 * num2;
      case '/': {
        const res = num1 / num2;
        return res > 0 ? Math.floor(res) : Math.ceil(res);
      }
    }
  }
  const stack = [];
  for(let i = 0; i < tokens.length; i++) {
    if(!op.includes(tokens[i])) {
      stack.push(tokens[i]);
    } else {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(calc(Number(num2), Number(num1), tokens[i]));
    }
  }
  return stack.pop();
};
// @lc code=end

