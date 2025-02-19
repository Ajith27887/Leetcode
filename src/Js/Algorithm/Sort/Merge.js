// Function to merge two sorted parts of array
function Merge(arr, left, middle, right) {
    // Length of both sorted aub arrays
    let l1 = middle - left + 1;
    let l2 = right - middle;
    // Create new subarrays
    let arr1 = new Array(l1);
    let arr2 = new Array(l2);

    // Assign values in subarrays
    for (let i = 0; i < l1; ++i) {
        console.log(i, l1, "each");
        arr1[i] = arr[left + i];
    }
    for (let i = 0; i < l2; ++i) {
        arr2[i] = arr[middle + 1 + i];
    }

    // To travesrse and modify main array
    let i = 0,
        j = 0,
        k = left;

    // Assign the smaller value for sorted output
    while (i < l1 && j < l2) {
        console.log(arr1[i] < arr2[j], "less");

        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            ++i;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }
    // Update the remaining elements
    while (i < l1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < l2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

// Function to implement merger sort in javaScript
function mergeSort(arr, left, right) {
    if (left >= right) {
        console.log(
            `Base case reached for index: left=${left}, right=${right}`
        );
        return;
    }

    // Middle index to create subarray halves
    let middle = left + parseInt((right - left) / 2);

    console.log(`Dividing: left=${left}, middle=${middle}, right=${right}`);

    // Apply mergeSort to both the halves
    console.log(arr, left, middle, "recusive");

    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);

    // Merge both sorted parts
    Merge(arr, left, middle, right);
}

// Input array
const arr = [38, 27, 43, 10];

// Apply merge sort function
mergeSort(arr, 0, arr.length - 1);

export default Merge;
