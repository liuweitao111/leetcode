/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const getWords = (word, visit) => wordList.filter(w => {
      if(visit[w]) {
        return false;
      }
      let flag = 0;
      for(let i = 0; i < word.length; i++) {
        if(w[i] !== word[i]) {
          flag++;
        }
        if(flag > 1) {
          return false;
        }
      }
      return flag === 1;
    });
    const queue = [];
    const visit = {};
    let ans = 0;
    queue.push(beginWord);
    while(queue.length) {
      const len = queue.length;
      ans++;
      for(let i = 0; i < len; i++) {
        const w = queue.shift();
        const words = getWords(w, visit);
        for(let i = 0; i < words.length; i++) {
          if(words[i] === endWord) {
            return ans + 1;
          }
          queue.push(words[i]);
          visit[words[i]] = true;
        }
      }
    }
    return 0;
};
// @lc code=end

