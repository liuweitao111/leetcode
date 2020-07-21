/*
 * @lc app=leetcode.cn id=312 lang=typescript
 *
 * [312] 戳气球
 */

// @lc code=start
function maxCoins(nums: number[]): number {
  function getNum(i:number):number {
    if(i < 0 || i > nums.length - 1) {
      return 1;
    }
    return nums[i];
  }
  const dp: {
    [index: string] : number
  } = {};
  function helper(l:number , r:number):number {
    if(dp[`${l}_${r}`]) {
      return dp[`${l}_${r}`];
    }
    if(l > r) {
      return 0;
    }
    const coins = Array.from({length: r - l + 1})
      .map((v, i) => helper(l, l + i - 1) + getNum(l - 1) * nums[l + i] * getNum(r + 1) + helper(l + i + 1, r));
    dp[`${l}_${r}`] = Math.max(...coins);
    return dp[`${l}_${r}`];
  }
  return helper(0, nums.length - 1);
};
// @lc code=end

