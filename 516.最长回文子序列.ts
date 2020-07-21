/*
 * @lc app=leetcode.cn id=516 lang=typescript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
function longestPalindromeSubseq(s: string): number {
  const memo: {
    [index: string]: number;
  } = {};
  function handle(start: number, end: number): number {
    if(memo[`${start}_${end}`]) {
      return memo[`${start}_${end}`];
    }
    if(start === end) {
      return 1;
    }
    if(start > end) {
      return 0;
    }
    if(s[start] === s[end]) {
      memo[`${start}_${end}`] = handle(start + 1, end - 1) + 2;
    } else {
      memo[`${start}_${end}`] = Math.max(handle(start, end - 1), handle(start + 1, end));
    }
    return memo[`${start}_${end}`];
  }
  return handle(0, s.length - 1);
};
// @lc code=end

