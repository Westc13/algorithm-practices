/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/** create an object containing the key-value pairs of the elements and its index
* iterate through array - for currentElement, compute currentDifference
* if currentDifference exists in the object and currentElementIndex !== object[currentDifference], return the indices of each element
* if currentDifference does not exist or the indices of both elements are equal, move to the next element in the array */

var twoSum = function(nums, target) {

numsIndexes ={};

for(let i = 0; i<nums.length; i+=1){
let currentDifference = target - nums[i];

if(numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i){
return[i, numsIndexes[currentDifference]];
} else{
numsIndexes[nums[i]] = i;
}
}
};

