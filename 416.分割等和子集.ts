/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  if(nums.length <= 1) {
    return false;
  }
  const half:number = nums.reduce((sum, v) => sum + v, 0) / 2;
  if(!Number.isInteger(half)) {
    return false;
  }
  const dp:number[] = Array(half + 1).fill(0);

  for(let i = 0; i < nums.length; i++) {
    for(let j = half; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  return dp[half] === half;
};
// @lc code=end

