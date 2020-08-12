/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i1 = m - 1;
  let i2 = n - 1;
  let j = m + n - 1;
  while(i1 >= 0 && i2 >= 0) {
    if(nums1[i1] <= nums2[i2]) {
      nums1[j] = nums2[i2];
      i2--;
    } else {
      nums1[j] = nums1[i1];
      i1--;
    }
    j--;
  }
  while(i2 >= 0) {
    nums1[j] = nums2[i2];
    j--;
    i2--;
  }
};
// @lc code=end

