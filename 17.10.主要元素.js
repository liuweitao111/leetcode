/**
* @param {number[]} nums
* @return {number}
*/
var majorityElement = function(nums) {
  let count = 1;
  let main = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      main = nums[i];
      count = 1;
    } else if(main === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  let mainCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === main) {
      mainCount++;
    }
  }

  return mainCount > nums.length / 2 ? main : -1;
};