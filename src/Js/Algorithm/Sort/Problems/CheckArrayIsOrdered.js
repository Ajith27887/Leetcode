// Problem: Check if array is sorted and rotated
// Time Complexity: O(n) where n is length of array
// Space Complexity: O(1) as we only use a counter variable

const Solution = (arr) => {
    // Counter to track number of positions where order is broken
    let count = 0;

    // Iterate through array
    for (let i = 0; i < arr.length; i++) {
        // Compare current element with next element
        // Use modulo to handle circular comparison (last element with first)
        if (arr[i] > arr[(i + 1) % arr.length]) {
            count++;
        }
    }

    // If array is sorted and rotated:
    // - count will be 1 for a valid rotation (one break in ascending order)
    // - count will be 0 for already sorted array
    // - count > 1 means array is not sorted and rotated
    console.log(count <= 1, count);
}

// Example: [3,4,5,1,2] is sorted array [1,2,3,4,5] rotated by 2 positions
Solution([3,4,5,1,2]);