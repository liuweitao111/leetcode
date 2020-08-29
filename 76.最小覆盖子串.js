/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
var matches = (needs, window) => Object.keys(needs).every(k => needs[k] <= window[k]);
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const needs = {};
  // 初始化
  for(const c of t) {
    needs[c] = (needs[c] || 0) + 1;
  }
  let minLen = Infinity;
  let resL = 0; // 记录最小len时l的值
  const window = {};
  let l = 0;
  let r = 0;
  while(r < s.length) {
    window[s[r]] = (window[s[r]] || 0) + 1;
    // 缩小窗口
    while(matches(needs, window)) {
      if(r - l + 1 < minLen) {
        minLen = r - l + 1;
        resL = l;
      }
      window[s[l]]--;
      l++;
    }
    r++;
  }
  if(minLen > s.length) {
    return "";
  }
  return s.substring(resL, resL + minLen);
};
// var minWindow = function(s, t) {
//   let minLen = Infinity;
//   let resL = 0;
//   const charMap = {};
//   let charType = 0;
//   for(const c of t) {
//     if(!charMap[c]) {
//       charMap[c] = 1;
//       charType++;
//     }else {
//       charMap[c]++;
//     }
//   }
//   let l = 0;
//   let r = 0;
//   while(r < s.length) {
//     if(charMap[s[r]] !== undefined) {
//       charMap[s[r]]--;
//       if(charMap[s[r]] === 0) {
//         charType--;
//       }
//     }
//     while(charType === 0) {
//       if(r - l + 1 < minLen) {
//         minLen = r - l + 1;
//         resL = l;
//       }
//       if(charMap[s[l]] !== undefined) {
//         charMap[s[l]]++;
//         if(charMap[s[l]] === 1) {
//           charType++;
//         }
//       }
//       l++;
//     }
//     r++;
//   }
//   if(minLen > s.length) {
//     return "";
//   }
//   return s.substring(resL, resL + minLen);
// };
// @lc code=end

