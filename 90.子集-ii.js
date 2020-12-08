/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    const res = [];
    const dfs = (i, t) => {
        res.push(t.slice());
        let j = i;
        while(j < nums.length) {
            t.push(nums[j]);
            dfs(j + 1, t);
            const n = t.pop();
            while(n === nums[j]) {
                j++;
            }
        }
    }
    dfs(0, []);
    return res;
};
// @lc code=end

