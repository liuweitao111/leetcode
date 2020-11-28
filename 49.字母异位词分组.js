/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for(const str of strs) {
    const key = getKey(str);
    if(!map[key]) {
      map[key] = [str];
    } else {
      map[key].push(str);
    }
  }
  return Object.values(map);
};
function getKey(str) {
  const map = Array(26).fill(0);
  for(const s of str) {
    map[s.charCodeAt() - 97]++;
  }
  return map.join('#');
}
// @lc code=end

