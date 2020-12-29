/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const set = new Set();
  const res = new Set();
  const toNumber = {
    'A': 0,
    'C': 1,
    'G': 2,
    'T': 3,
  };
  const nums = s.split('').map(c => toNumber[c]);
  const L = 10;
  let key = 0;
  for(let i = 0; i <= s.length - L; i++) {
    if(i === 0) {
      key = nums.slice(i, i + L).reduce((m, n) => (m << 2) | n, 0);
      set.add(key);
    } else {
      key = ((key << 2) | nums[i + L - 1]) & 0xfffff;
      if(set.has(key)) {
        res.add(s.slice(i, i + L));
      } else {
        set.add(key);
      }
    }
  }
  return [ ...res ];
};
// @lc code=end

