/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const common = [...nums.reduce((common, currentArray) => {
    const currentSet = new Set(currentArray);
    return new Set([...common].filter(item => currentSet.has(item)));
  }, new Set(nums[0]))];

  return common.sort((a, b) => a - b);
};