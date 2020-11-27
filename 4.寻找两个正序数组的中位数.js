/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if(nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;
  let mid1 = 0;
  let mid2 = 0;

  while(left <= right) {
    const i = (left + right) >> 1;
    const j = ((m + n + 1) >> 1) - i;
    const num_mi1 = i === 0 ? -Infinity : nums1[i - 1];
    const num_i = i === m ? Infinity : nums1[i];
    const num_mj1 = j === 0 ? -Infinity : nums2[j - 1];
    const num_j = j === n ? Infinity : nums2[j];

    if(num_mi1 <= num_j) {
      left = i + 1;
      mid1 = Math.max(num_mi1, num_mj1);
      mid2 = Math.min(num_i, num_j);
    } else {
      right = i - 1;
    }
  }
  return (m + n) % 2 === 0 ? (mid1 + mid2) / 2 : mid1;
};
// @lc code=end

