/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const result = [];
  if(!words.length) {
    return result;
  }
  const len = words[0].length;
  const totalLen = s.length - len * words.length + 1;
  for(let i = 0; i < totalLen; i++) {
    const matchWords = [...words];
    while(matchWords.length) {
      const start = i + (words.length - matchWords.length) * len;
      const str = s.slice(start, start + len);
      const index = matchWords.indexOf(str);
      if(index > -1) {
        matchWords.splice(index, 1);
      } else {
        break;
      }
    }
    if(matchWords.length === 0) {
      result.push(i);
    }
  }
  return result;
};
// @lc code=end

