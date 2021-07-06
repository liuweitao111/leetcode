/*
 * @lc app=leetcode.cn id=1418 lang=javascript
 *
 * [1418] 点菜展示表
 */

// @lc code=start
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
  const foodsSet = new Set();
  const foodsMap = {};
  // { table: { food: count }}
  for (const order of orders) {
    const [, table, food] = order;
    if(!foodsMap[table]) {
      foodsMap[table] = {};
    }
    foodsMap[table][food] = (foodsMap[table][food] || 0) + 1;
    foodsSet.add(food);
  }

  const foods = [...foodsSet].sort();
  const tables = Object.keys(foodsMap).sort((a, b) => Number(a) - Number(b));

  const res = [];
  res[0] = ['Table'].concat(foods);

  for(const table of tables) {
    const cnt = [table];
    for(const food of foods) {
      cnt.push(`${foodsMap[table][food] || 0}`);
    }
    res.push(cnt);
  }
  return res;
}
// @lc code=end
