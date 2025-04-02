function Merge(arr, left, mid, right) { // L0,M0,R1
	
    const n1 = mid - left + 1; // 1
    const n2 = right - mid; // 1	

    // Create temp arrays
	let L,
    R;
    if (n1) {
      L = new Array(n1);
    };
    if (n2) {
      R = new Array(n2);
    }

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++) // n1 = 1
        L[i] = arr[left + i];
		// console.log(L,"Array L",left );
		
    for (let j = 0; j < n2; j++) // n2 = 1
        R[j] = arr[mid + 1 + j];
		// console.log(L,"Array R", j);

    let i = 0, j = 0;
    let k = left;

    // Merge the temp arrays back into arr[left..right]
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    if (left >= right) {
        console.log("return"); // Base case: Stop recursion when left and right pointers meet or cross.
        return;
    }

    const mid = Math.floor(left + (right - left) / 2);
  
    // Recursively sort the left half of the array
    console.log(`Calling mergeSort (Left Half): left=${left}, mid=${mid}, right=${right}`);
    mergeSort(arr, left, mid);
  
    console.log(`Back from Left Half: left=${left}, mid=${mid}, right=${right}`); 

    // Recursively sort the right half of the array
    console.log(`Calling mergeSort (Right Half): left=${left}, mid=${mid}, right=${right}`);
    mergeSort(arr, mid + 1, right);

    console.log(`Back from Right Half: left=${left}, mid=${mid}, right=${right}`);

    // Merge the sorted left and right halves
    console.log(`Calling Merge Function: left=${left}, mid=${mid}, right=${right}`);
    Merge(arr, left, mid, right);

    console.log(`Merge Completed: left=${left}, mid=${mid}, right=${right}`);
}


function printArray(arr) {
    console.log(arr.join(" "));
}

// Driver code
const arr = [12, 11, 13, 5, 6, 7];
console.log("Given array is");

mergeSort(arr, 0, arr.length - 1);

console.log("\nSorted array is");
printArray(arr);

export default Merge