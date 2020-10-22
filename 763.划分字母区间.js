/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  if(!S.length) {
    return [];
  }
  const letterMax = {};
  for(let i = 0; i < S.length; i++) {
    letterMax[S[i]] = i;
  }
  let i = 0;
  const res = [];
  let max = letterMax[S[0]];
  while(i < S.length) {
    let len = 0;
    while(max >= i) {
      max = Math.max(max, letterMax[S[i]]);
      len++;
      i++;
    }
    res.push(len);
    max = letterMax[S[i]];
  }
  return res;
};
// @lc code=end

