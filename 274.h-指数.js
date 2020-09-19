/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const len = citations.length;
  const map = citations.reduce((res, c) => {
    const k = Math.min(c, len);
    res[k] = res[k] ? res[k] + 1 : 1;
    return res;
  }, {});
  let k = len;
  let s = 0;
  while(k) {
    s += (map[k] || 0);
    if(s >= k) {
      return k;
    }
    k--;
  }
  return k;
};
// @lc code=end

