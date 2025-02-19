function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            // Swap elements
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Swap pivot to its correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    console.log(i, "i");
    return i + 1; // Return the partition index
}

function QuickSort(arr, low, high) {
    if (low >= high) return;
    let pi = partition(arr, low, high);

    console.log(pi, "pi");

    QuickSort(arr, low, pi - 1);
    QuickSort(arr, pi + 1, high);
}

let arr = [10, 80, 30, 90, 40];
QuickSort(arr, 0, arr.length - 1);

export default QuickSort;
