/*
 * @lc app=leetcode.cn id=726 lang=javascript
 *
 * [726] 原子的数量
 */

// @lc code=start
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  let stack = [];
  const eleMap = {};

  let i = 0;

  const getEle = () => {
    let ele = formula[i++];
    while (formula[i] && /[a-z]/.test(formula[i])) {
      ele += formula[i++];
    }
    return ele;
  }

  const getNum = () => {
    let num = '';
    while (/\d/.test(formula[i])) {
      num += formula[i++];
    }
    return Number(num) || 1;
  }

  while (i < formula.length) {
    if (/[A-Z]/.test(formula[i])) {
      const ele = getEle();
      if (/\d/.test(formula[i])) {
        stack.push([ele, getNum()]);
      } else {
        stack.push([ele, 1]);
      }
    } else if(formula[i] === '(') {
      stack.push(formula[i]);
      i++;
    } else if(formula[i] === ')') {
      i++;
      const num = getNum();
      const tmpStack = [];
      let item = stack.pop();
      while (item !== '(') {
        tmpStack.push([item[0], item[1] * num]);
        item = stack.pop(); 
      }
      stack = stack.concat(tmpStack);
    }
  }

  while(stack.length) {
    const item = stack.pop();
    eleMap[item[0]] = (eleMap[item[0]] || 0) + item[1];
  }

  return Object.keys(eleMap).sort().reduce((res, key) => `${res}${key}${(eleMap[key] === 1) ? '': eleMap[key]}`, '');
};
// @lc code=end

