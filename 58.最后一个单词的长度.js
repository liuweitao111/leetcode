/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length - 1;
  let count = 0;
  while(s[i] === ' ' && i >= 0) {
    i--;
  }
  while(s[i] !== ' ' && i >= 0) {
    i--;
    count++;
  }
  return count;
};
// @lc code=end

