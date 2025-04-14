// const Solution = ( arr, n ) => {
// 	let i = 0;
//     if(arr[i -1] < arr[i]){         			
// 		console.log("true");
//         return true;
//     }else{
// 		console.log("false");
//         return false;
//     }
// }


const Solution = (arr) => {
    let count = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
		console.log(arr[(i + 1) % n], "div");
		
        if (arr[i] > arr[(i + 1) % n]) {
            count++;
        }
    }

    return count <= 1;
}
Solution([3,4,5,1,2]);

// 3 < 4 = true; 
// 4 < 5 = true;
// 5 < 1 = false;

