/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const edges = new Map();
  [beginWord, ...wordList].forEach((word) => {
    edges.set(word, []);
    const arr = word.split('');
    for(let i = 0; i < arr.length; i++) {
      const tmp = arr[i];
      arr[i] = '*';
      const newNode = arr.join('');
      if(!edges.has(newNode)) {
        edges.set(newNode, []);
      }
      edges.get(newNode).push(word);
      edges.get(word).push(newNode);
      arr[i] = tmp;
    }
  });
  if(!edges.has(endWord)) {
    return [];
  }
  const ans = [];
  const cost = {};
  const queue = [];
  queue.push([beginWord]);
  cost[beginWord] = 0;
  while(queue.length) {
    const path = queue.shift();
    const last = path[path.length - 1];
    if(last === endWord) {
      ans.push(path.filter(n => n.indexOf('*') === -1));
    } else {
      edges.get(last).forEach(n => {
        if(!cost[n] || cost[n] >= cost[last] + 1) {
          cost[n] = cost[last] + 1;
          queue.push([...path, n]);
        }
      });
    }
  }
  return ans;
};
// @lc code=end

