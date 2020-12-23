/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
var DoubleLinkNode = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.maxSize = capacity;
  this.map = new Map();
  this.linkHead = new DoubleLinkNode();
  this.linkTail = new DoubleLinkNode();
  this.linkHead.next = this.linkTail;
  this.linkTail.prev = this.linkHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(!this.map.has(key)) {
    return -1;
  }
  const node = this.map.get(key);
  this.moveToHead(node);
  return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(!this.map.has(key)) {
    this.insertToHead(key, value);
    if(this.map.size > this.maxSize) {
      this.removeTail();
    }
  } else {
    node = this.map.get(key);
    node.value = value;
    this.moveToHead(node);
  }
};

LRUCache.prototype.insertToHead = function(key, value) {
  const node = new DoubleLinkNode(key, value);
  node.next = this.linkHead.next;
  node.next.prev = node;
  this.linkHead.next = node;
  node.prev = this.linkHead;
  this.map.set(key, node);
};

LRUCache.prototype.removeTail = function() {
  const { key } = this.linkTail.prev;
  this.linkTail.prev = this.linkTail.prev.prev;
  this.linkTail.prev.next = this.linkTail;
  this.map.delete(key);
};

LRUCache.prototype.moveToHead = function(node) {
  // remove
  node.prev.next = node.next;
  node.next.prev = node.prev;

  // insert
  node.next = this.linkHead.next;
  node.next.prev = node;
  this.linkHead.next = node;
  node.prev = this.linkHead;
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

