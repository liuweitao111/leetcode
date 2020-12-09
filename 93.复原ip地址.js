/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const getValid = i => {
    const l = [];
    if(i >= s.length) {
      return l;
    }
    l.push(s[i]);
    if(s[i] === '0') {
      return l;
    }
    if(i + 1 < s.length) {
      l.push(s.substr(i, 2));
    }
    const s3 = s.substr(i, 3);
    if(100 <= Number(s3) && Number(s3) <= 255) {
      l.push(s3);
    }
    return l;
  }
  const res = [];
  const helper = (i, t) => {
    if(t.length === 4) {
      if(i === s.length) {
        res.push(t.join('.'));
      } else {
        return;
      }
    }
    for(const str of getValid(i)) {
      t.push(str);
      helper(i + str.length, t);
      t.pop();
    }
  }
  helper(0, []);
  return res;
};
// @lc code=end

