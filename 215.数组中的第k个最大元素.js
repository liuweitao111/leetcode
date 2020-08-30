/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const minHeap = new MinHeap();
  const add = function(val) {
    if(k > minHeap.getLength()) {
      minHeap.add(val);
    } else if(minHeap.getTop() < val) {
      minHeap.replaceTop(val);
    }
  };
  for(let i = 0; i < nums.length; i++) {
    add(nums[i]);
  }
  return minHeap.getTop();
};

var MinHeap = function() {
  this.heap = [Infinity];
}

MinHeap.prototype.swap = function(i, j) {
  [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
}

MinHeap.prototype.shiftUp = function(i) {
  while(i > 1) {
    const halfI = Math.floor(i / 2);
    if(this.heap[halfI] > this.heap[i]) {
      this.swap(i, halfI);
    } else {
      break;
    }
    i =  halfI;
  }
}

MinHeap.prototype.shiftDown = function(i) {
  while(i * 2 <= this.getLength()) {
    const tmp = i * 2 + 1 <= this.getLength() ? this.heap[i * 2 + 1] : Infinity;
    let minIndex = i;
    if(this.heap[i] > this.heap[i * 2]) {
      minIndex = i * 2;
    }
    if(this.heap[minIndex] > tmp) {
      minIndex = i * 2 + 1;
    }
    if(i !== minIndex) {
      this.swap(i, minIndex);
    } else {
      break;
    }
    i = minIndex;
  }
}

MinHeap.prototype.add = function(val) {
  this.heap.push(val);
  this.shiftUp(this.getLength());
}

MinHeap.prototype.replaceTop = function(val) {
  this.heap[1] = val;
  this.shiftDown(1);
}

MinHeap.prototype.getTop = function() {
  return this.heap[1];
}

MinHeap.prototype.getLength = function () {
  return this.heap.length - 1;
}
// @lc code=end

