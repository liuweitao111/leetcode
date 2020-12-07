/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    if(s1.length !== s2.length) {
        return false;
    }
    const len = s1.length;
    const dp = Array.from(s1).map(() => Array.from(s1).map(() => []));
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            dp[i][j][1] = s1[i] === s2[j]
        }
    }
    for(let l = 2; l <= len; l++) {
        for(let i = 0; i <= len - l; i++) {
            for(let j = 0; j <= len - l; j++) {
                for(let k = 1; k < l; k++) {
                    if((dp[i][j][k] && dp[i + k][j + k][l - k]) || (dp[i][j + l - k][k] && dp[i + k][j][l - k])) {
                        dp[i][j][l] = true;
                        break;
                    }
                }
            }
        }
    }
    return !!dp[0][0][len];
};
// v1.1
// var isScramble = function(s1, s2) {
//     const getKey = (...arg) => arg.join('#');
//     const map = {};
//     const helper = (i, j, len) => {
//         const key = getKey(i, j, len);
//         if(map[key] !== undefined) {
//             return map[key];
//         }
//         let res = false;
//         if(s1.substr(i, len) === s2.substr(j, len)) {
//             res = true;
//         } else {
//             for(let k = 1; k < len; k++) {
//                 if((helper(i, j, k) && helper(i + k, j + k, len - k)) || 
//                     (helper(i, j + len - k, k) && helper(i + k, j, len - k))) {
//                     res = true;
//                     break;
//                 }
//             }
//         }
//         map[key] = res;
//         return res;
//     }
//     return helper(0, 0, s1.length);
// };
// v1.0
// var isScramble = function(s1, s2) {
//     if(s1.length !== s2.length) {
//         return false;
//     }
//     if(s1 === s2) {
//         return true;
//     }
//     const len = s1.length;
//     for(let i = 1; i < len; i++) {
//         const res = 
//             (isScramble(s1.slice(0, i), s2.slice(0, i)) && isScramble(s1.slice(i), s2.slice(i))) || 
//             (isScramble(s1.slice(0, i), s2.slice(len - i)) && isScramble(s1.slice(i), s2.slice(0, len - i)))
//         if(res) {
//             return true;
//         }
//     }
//     return false;
// };
// @lc code=end

