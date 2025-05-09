// First we find the smallest element and swap it with the first element.
// This way we get the smallest element at its correct position
// Then we find the smallest among remaining elements (or second smallest) and swap it with the second element.
// We keep doing this until we get all elements moved to correct position.

function Selection(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		// Assume the current position holds
		// the minimum element
		let min_idx = i;

		// Iterate through the unsorted portion
		// to find the actual minimum
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min_idx]) {
				console.log(arr[j], arr[min_idx]);
				// Update min_idx if a smaller element is found
				min_idx = j;
			}
		}

		console.log(arr[min_idx], "mid");

		// Move minimum element to its
		// correct position
		let temp = arr[i];
		arr[i] = arr[min_idx];
		arr[min_idx] = temp;
	}
}

function printArray(arr) {
	for (let val of arr) {
		console.log(val + " ");
	}
	console.log();
}

// Driver function
const arr = [64, 25, 12, 22, 11];

console.log("Original array: ");
printArray(arr);

Selection(arr);

console.log("Sorted array: ");
printArray(arr);

Selection([64, 25, 12, 22, 11]);

export default Selection;
