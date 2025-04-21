const Solution = (arr) => {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] > arr[(i + 1) % arr.length]) {
		count++;
	  }
	}
	console.log(count <= 1, count);
}

Solution([3,4,5,1,2]);