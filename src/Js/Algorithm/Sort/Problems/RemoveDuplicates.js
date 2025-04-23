/**
 * @param {number[]} nums
 * @return {number}
*/

// Two Pointer App approach #26 Leetcode
const removeDuplicates = function(nums) {
	let j = 0;

	for (let i = 1; i < nums.length; i++) {
		if (nums[j] !== nums[i]) {
			j++;
			nums[j] = nums[i];
		}		
	}	
	
	console.log(j,"remove");
	
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

// Explanation

// 0 !== 0 = false
// 0 !== 1 = true j = 1,
// 1 !== 1 = false,
// 1 !== 1 = false,
// 1 !== 2 = true j = 2,   
// 2 !== 2 = false,
// 2 !== 3 = true j = 3,
// 3 !== 3 = false,
// 4 !== 3 = false j = 4,
