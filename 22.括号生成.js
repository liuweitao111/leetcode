/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  const backtrack = (item, open, close) => {
    if(item.length ===  2 * n) {
      result.push(item);
    }
    if(open < n) {
      backtrack(`${item}(`, open + 1, close);
    }
    if(close < open) {
      backtrack(`${item})`, open, close + 1);
    }
  }
  backtrack('', 0, 0);
  return result;
};
// @lc code=end

