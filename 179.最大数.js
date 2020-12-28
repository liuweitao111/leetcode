/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if(nums.every(n => n === 0)) {
    return '0';
  }
  nums.sort((a, b) => {
    const o1 = `${a}${b}`;
    const o2 = `${b}${a}`;
    return o1 > o2 ? - 1 : (o1 < o2 ? 1 : 0);
  });
  return nums.join('');
};
// var largestNumber = function(nums) {
//   if(nums.every(n => n === 0)) {
//     return '0';
//   }
//   nums.sort((a, b) => {
//     a = String(a);
//     b = String(b);
//     let i = 0;
//     let j = 0;
//     while(i !== a.length - 1 || j !== b.length - 1) {
//       if(a[i] > b[j]) {
//         return -1;
//       }
//       if(a[i] < b[j]) {
//         return 1;
//       }
//       i = (i + 1) % a.length;
//       j = (j + 1) % b.length;
//     }
//     return a[i] > b[j] ? - 1 : (a[i] < b[j] ? 1 : 0);
//   });
//   return nums.join('');
// };
// @lc code=end

