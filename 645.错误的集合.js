/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
function findErrorNums(nums) {
  let xor = 0;
  // x 表示正常的数字, y 表示重复的数字, z 表示缺失的数字
  // (x ^ x) ^ (y ^ y ^ y) ^ z = y ^ z
  for(let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
    xor ^= (i + 1);
  }
  // 得到最低位的1 6 & (-6) = 2
  // 表示 y 和 z 在这一位是不同的。所以他们分别在这一位是 0 和 1
  const lowBit = xor & (-xor);
  
  let num1 = 0, num2 = 0;
  // (x ^ x) ^ (y ^ y ^ y) = y
  // (x ^ x) ^ z = z
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] & lowBit) {
      num1 ^= nums[i];
    } else {
      num2 ^= nums[i];
    }

    if((i + 1) & lowBit) {
      num1 ^= (i + 1);
    } else {
      num2 ^= (i + 1);
    }
  }

  // 判断谁是 y, 谁是 z
  if (nums.includes(num1)) {
    return [num1, num2];
  }

  return [num2, num1];
};
// @lc code=end
