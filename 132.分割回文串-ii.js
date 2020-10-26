/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
function findPosMap(s) {
  const map = {};
  for(let i = 0; i < s.length; i++) {
    if(!map[s[i]]) {
      map[s[i]] = [];
    }
    map[s[i]].push(i);
  }
  return map;
}
function isPalindrome(s, start, end) {
  while(start < end) {
    if(s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const dp = [-1, 0];
  const posMap = findPosMap(s);
  for(let i = 1; i < s.length; i++) {
    const dps = posMap[s[i]].filter(p => p <= i && isPalindrome(s, p, i)).map(p => dp[p]);
    dp[i + 1] = Math.min(...dps) + 1;
  }
  return dp[s.length];
};
// @lc code=end

