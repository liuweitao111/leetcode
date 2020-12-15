/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let ans = 0;
  for(const num of nums) {
    if(!set.has(num - 1)) {
      let curr = 1;
      let currNum = num;
      while(set.has(currNum + 1)) {
        curr++;
        currNum++;
      }
      ans = Math.max(ans, curr);
    }
  }
  return ans;
};
// @lc code=end

