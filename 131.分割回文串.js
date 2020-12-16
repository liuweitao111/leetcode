/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const isPalindrome = (start, end) => {
    while(start < end) {
      if(s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
  const dp = Array.from({ length: s.length + 1 }).map(() => []);
  dp[0] = [[]];
  for(let i = 0; i < s.length; i++) {
    for(let j = i; j >= 0; j--) {
      if(isPalindrome(j, i)) {
        const str = s.slice(j, i + 1);
        dp[i + 1] = dp[i + 1].concat(dp[j].map(v => [...v, str]));
      }
    }
  }
  return dp[s.length];
};
// @lc code=end

