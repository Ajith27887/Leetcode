function LargestElement(arr, n, max = 0) {

	if (arr.length === n  ) {  
		return max;  
    }

	max =  arr[n] > max ? arr[n] : max;
	

    return LargestElement(arr, n + 1, max);
}

console.log(LargestElement([10, 30,1110, 20, 50, 90, 100], 0));
