/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const res = reverse(s, 0);
  for(let i = 0; i < res.length; i++) {
    s[i] = res[i];
  }
};
function reverse(s, i) {
  if(i === s.length) {
    return '';
  }
  return reverse(s, i + 1) + s[i];
}
// var reverseString = function(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while(left < right) {
//     [s[left], s[right]] = [s[right], s[left]];
//     left++;
//     right--;
//   }
// };
// @lc code=end

