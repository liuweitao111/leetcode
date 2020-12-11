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
  const wordIDs = {};
  const edge = {};
  let no = 1;
  const addWord = word => {
    if(!wordIDs[word]) {
      wordIDs[word] = no++;
      edge[wordIDs[word]] = [];
    }
    return wordIDs[word];
  }
  const addEdge = word => {
    const id1 = addWord(word);
    const wArr = [ ...word ];
    for(let i = 0; i < wArr.length; i++) {
      const t = wArr[i];
      wArr[i] = '*';
      const id2 = addWord(wArr.join());
      edge[id1].push(id2);
      edge[id2].push(id1);
      wArr[i] = t;
    }
  }
  for(word of wordList) {
    addEdge(word);
  }
  addEdge(beginWord);
  if(!wordIDs[endWord]) {
    return 0;
  }
  const beginID = wordIDs[beginWord];
  const endID = wordIDs[endWord];
  const queue = [beginID];
  const dis = [];
  dis[beginID] = 0;
  while(queue.length) {
    const w = queue.shift();
    if(w === endID) {
      return dis[endID] / 2 + 1;
    }
    for(d of edge[w]) {
      if(!dis[d]) {
        dis[d] = dis[w] + 1;
        queue.push(d);
      }
    }
  }
  return 0;
}
// var ladderLength = function(beginWord, endWord, wordList) {
//     const getWords = (word, visit) => wordList.filter(w => {
//       if(visit[w]) {
//         return false;
//       }
//       let flag = 0;
//       for(let i = 0; i < word.length; i++) {
//         if(w[i] !== word[i]) {
//           flag++;
//         }
//         if(flag > 1) {
//           return false;
//         }
//       }
//       return flag === 1;
//     });
//     const queue = [];
//     const visit = {};
//     let ans = 0;
//     queue.push(beginWord);
//     while(queue.length) {
//       const len = queue.length;
//       ans++;
//       for(let i = 0; i < len; i++) {
//         const w = queue.shift();
//         const words = getWords(w, visit);
//         for(let i = 0; i < words.length; i++) {
//           if(words[i] === endWord) {
//             return ans + 1;
//           }
//           queue.push(words[i]);
//           visit[words[i]] = true;
//         }
//       }
//     }
//     return 0;
// };
// @lc code=end

