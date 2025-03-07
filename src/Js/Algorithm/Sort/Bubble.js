function Bubble(arr) {
	for (let i = 0; i < arr.length; i++) {
	  for (let j = 0; j < arr.length - 1 - i; j++) {
		//Compare two array or grater or not
		if (arr[j] > arr[j + 1]) {
		  let temp = arr[j];
		  arr[j] = arr[j + 1];
		  arr[j + 1] = temp;
		}
	  }
	}
	console.log(arr);
  }
  
  Bubble([12, 2, 35, 6, 10, 55]);
  
  export default Bubble;
  