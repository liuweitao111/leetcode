/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1, flag = 0;
    let sum = "";
    while(i >= 0 && j >= 0) {
        const s = flag + Number(a[i]) + Number(b[j]);
        sum = `${s % 2}${sum}`;
        flag = s >> 1;
        i--;
        j--;
    }
    while(i >= 0) {
        const s = flag + Number(a[i]);
        sum = `${s % 2}${sum}`;
        flag = s >> 1;
        i--;
    }
    while(j >= 0) {
        const s = flag + Number(b[j]);
        sum = `${s % 2}${sum}`;
        flag = s >> 1;
        j--;
    }
    return flag === 1 ? `1${sum}` : sum;
};
// @lc code=end

