/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function(digits) {
//   const map = {
//     2: ['a', 'b', 'c'],
//     3: ['d', 'e', 'f'],
//     4: ['g', 'h', 'i'],
//     5: ['j', 'k', 'l'],
//     6: ['m', 'n', 'o'],
//     7: ['p', 'q', 'r', 's'],
//     8: ['t', 'u', 'v'],
//     9: ['w', 'x', 'y', 'z'],
//   }
//   const helper = (i, combinations) => {
//     if(i === digits.length) {
//       return combinations;
//     }
//     let result = map[digits[i]];
//     if(i > 0) {
//       result = result.reduce((res, c) => {
//         return res.concat(combinations.map(it => it.concat(c)));
//       }, []);
//     }
//     return helper(i + 1, result);
//   }
//   return helper(0, []);
// };
var letterCombinations = function(digits) {
  if(digits.length === 0) {
    return [];
  }
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const helper = (combinations, i, combination) => {
    if(i === digits.length) {
      combinations.push(combination);
      return;
    }
    const letters = map[digits[i]];
    for(l of letters) {
      combination = combination.concat(l);
      helper(combinations, i + 1, combination);
      combination = combination.slice(0, -1);
    }
  }
  const result = [];
  helper(result, 0, '');
  return result;
};
// @lc code=end

