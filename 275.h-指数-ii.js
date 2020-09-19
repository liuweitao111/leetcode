/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
// var hIndex = function(citations) {
//   const len = citations.length;
//   let l = 1;
//   let r = Math.min(len, citations[len - 1]);
//   let maxH = 0;
//   while(l <= r) {
//     const m = Math.floor((l + r) / 2);
//     if(citations[len - m] >= m && (len - m - 1 < 0 || citations[len - m - 1] <= m)) {
//       if(maxH < m) {
//         maxH = m;
//       }
//       l = m + 1;
//     } else if(citations[len - m] < m) {
//       r = m - 1;
//     } else {
//       l = m + 1;
//     }
//   }
//   return maxH;
// };
var hIndex = function(citations) {
  const len = citations.length;
  let l = 0, r = len - 1;
  while(l <= r) {
    const m = Math.floor((l + r) / 2);
    if(citations[m] === len - m) {
      return len - m;
    } else if(citations[m] > len - m) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return len - l;
};
// @lc code=end

