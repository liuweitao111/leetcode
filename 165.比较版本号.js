/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split('.').map(v => Number(v));
  version2 = version2.split('.').map(v => Number(v));

  let i = 0;
  while(i < version1.length && i < version2.length) {
    if(version1[i] > version2[i]) {
      return 1;
    }
    if(version1[i] < version2[i]) {
      return -1;
    }
    i++;
  }
  while(i < version1.length) {
    if(version1[i++] > 0) {
      return 1;
    }
  }
  while(i < version2.length) {
    if(version2[i++] > 0) {
      return -1;
    }
  }
  return 0;
};
// @lc code=end

