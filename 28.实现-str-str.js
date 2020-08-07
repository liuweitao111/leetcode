/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle) {
    return 0;
  }
  const len = haystack.length - needle.length + 1;
  for(let i = 0; i < len; i++) {
    let equal = true;
    for(let j = 0; j < needle.length; j++) {
      if(haystack[i + j] !== needle[j]) {
        equal = false;
        break;
      }
    }
    if(equal) {
      return i;
    }
  }
  return -1;
};
// @lc code=end

