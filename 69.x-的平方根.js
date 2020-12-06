/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, r = x;
    while(l <= r) {
        const mid = (l + r) >> 1;
        const y = mid * mid;
        if(y === x) {
            return mid;
        } else if(y < x) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return r;
};
// @lc code=end

