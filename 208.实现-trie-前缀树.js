/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = {
    isWord: false,
    next: {},
  };
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  const len = word.length;
  let node = this.root.next;
  for(let i = 0; i < len; i++) {
    const w = word[i];
    if(!node[w]) {
      node[w] = {
        isWord: false,
        next: {},
      }
    }
    if(i === len - 1) {
      node[w].isWord = true;
    }
    node = node[w].next;
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  for(const w of word) {
    node = node.next[w];
    if(!node) {
      return false;
    }
  }
  return node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for(const w of prefix) {
    node = node.next[w];
    if(!node) {
      return false;
    }
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end