/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
function TrieNode(val, isEnd) {
  this.val = val;
  this.isEnd = isEnd;
  this.children = [];
}
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.trie = new TrieNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.trie;
  for(let i = 0; i < word.length; i++) {
    if(!node.children.find(n => n.val === word[i])) {
      node.children.push(new TrieNode(word[i], false));
    }
    node = node.children.find(n => n.val === word[i]);
    if(i === word.length - 1) {
      node.isEnd = true;
    }
  }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const dfs = (node, i) => {
    if(!node) {
      return false;
    }
    if(i === word.length) {
      return node.isEnd;
    }
    if(word[i] !== '.') {
      node = node.children.find(n => n.val === word[i]);
      return dfs(node, i + 1);
    }
    for(const child of node.children) {
      const res = dfs(child, i + 1);
      if(res) {
        return true;
      }
    }
    return false;
  }
  return dfs(this.trie, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
