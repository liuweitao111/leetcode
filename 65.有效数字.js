/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return /^\s*[\-\+]?(\d+\.?\d*|\.\d+)(e[\-\+]?\d+)?\s*$/.test(s);
};
// @lc code=end

