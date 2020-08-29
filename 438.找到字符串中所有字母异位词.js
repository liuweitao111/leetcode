/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  // 初始化
  let needs = {};
  let window = {};
  for(let i = 0; i < 26; i++) {
    needs[String.fromCharCode(97 + i)] = 0;
    window[String.fromCharCode(97 + i)] = 0;
  }
  for(let i = 0; i < p.length; i++) {
    needs[p[i]]++;
  }

  const result = [];
  let l = 0;
  let r = 0;
  while(r < s.length) {
    window[s[r]]++;

    while(window[s[r]] > needs[s[r]]) {
      window[s[l]]--;
      l++;
    }

    if(r - l + 1 === p.length) {
      result.push(l);
    }
    r++;
  }
  return result;
};
// @lc code=end

/*
var findAnagrams = function(s, p) {
  let letterMap = {};
  let letterUniqCount = 0;
  for(let i = 0; i < p.length; i++) {
    if(!letterMap[p[i]]) {
      letterMap[p[i]] = 1;
      letterUniqCount++;
    } else {
      letterMap[p[i]]++;
    }
  }
  const mm = { ...letterMap };
  const mc = letterUniqCount;
  const result = [];
  let p0 = 0;
  let p1 = 0;
  while(p1 < s.length) {
    if(letterMap[s[p1]] === undefined) {
      p1++;
      p0 = p1;
      letterMap = { ...mm };
      letterUniqCount = mc;
    } else {
      letterMap[s[p1]]--;
      if(letterMap[s[p1]] === 0) {
        letterUniqCount--;
      }
      if(letterUniqCount === 0) {
        while(p1 - p0 >= p.length) {
          letterMap[s[p0]]++;
          p0++;
          if(letterMap[s[p0 - 1]] === 1) {
            letterUniqCount++;
            break;
          }
        }
        if(letterUniqCount === 0) {
          result.push(p0);
        }
      }
      p1++;
    }
  }
  return result;
};
*/