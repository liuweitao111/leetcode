/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
type LockNumber = [number, number, number, number];

function openLock(deadends: string[], target: string): number {
  if(deadends.includes('0000')) {
    return -1;
  }
  if(target === '0000') {
    return 0;
  }
  let steps = 0;
  const visit = {};
  const queue: LockNumber[]  = [];
  queue.push([0, 0, 0, 0]);

  const pushNewLock = (lock: LockNumber, idx: number, step: 1 | -1) => {
    const newLock: LockNumber = [...lock];
    newLock[idx] = (newLock[idx] + step + 10) % 10;
    const strLock = newLock.join('');
  
    if(!visit[strLock] && !deadends.includes(strLock)) {
      queue.push(newLock);
      visit[strLock] = 1;
      return strLock;
    }

    return '';
  }

  while(queue.length > 0) {
    let len = queue.length;
    steps++;
    while(len-- > 0) {
      const currentLock = queue.shift();
      for(let i = 0; i < currentLock.length; i++) {
        if(target === pushNewLock(currentLock, i, 1)) {
          return steps;
        };
        if(target === pushNewLock(currentLock, i, -1)) {
          return steps;
        };
      }
    }
  }
  return -1;
};
// @lc code=end

