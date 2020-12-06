/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const createBlank = len => Array(len + 1).join(' ');
    const ans = [];
    let row = [];
    let len = 0;
    for(const word of words) {
        if(len + word.length + row.length <= maxWidth) {
            row.push(word);
            len += word.length;
        } else {
            if(row.length === 1) {
                ans.push(`${row[0]}${createBlank(maxWidth - len)}`);
            } else {
                const l = Math.floor((maxWidth - len) / (row.length - 1));
                const x = (maxWidth - len) % (row.length - 1);
                let s = '';
                for(let i = 0; i < row.length - 1; i++) {
                    s += row[i] + createBlank(l);
                    if(i < x) {
                        s += ' ';
                    }
                }
                ans.push(s + row[row.length - 1]);
            }
            row = [ word ];
            len = word.length;
        }
    }
    const s = row.join(' ');
    ans.push(s + createBlank(maxWidth - s.length));
    return ans;
};
// @lc code=end

